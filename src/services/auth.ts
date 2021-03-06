import jwtDecode from 'jwt-decode';

import { store } from '@store';
import history from '@services/history';
import { LOCAL_STORAGE_KEYS } from '@config';
import { clearLocalState, getFromLocalState } from '@services/ls';


export const userLogout = () => {
  history.replace('/');
  window.location.reload();
	clearLocalState(LOCAL_STORAGE_KEYS.USER);
	clearLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
	clearLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
	clearLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP);
	store.dispatch({ type: 'LOG_OUT' });
};

export const checkTokens = () => {
  const accessToken = getFromLocalState<string>(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  const refreshToken = getFromLocalState<string>(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);

  if (!accessToken || !refreshToken) {
	  clearLocalState(LOCAL_STORAGE_KEYS.USER);
	  clearLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
	  clearLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
	  clearLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP);
    return false;
  }

  try {
    const { exp } = jwtDecode(accessToken);
    if (!exp) {
      userLogout();
      return false;
    }
  } catch (e) {
    userLogout();
    return false;
  }

  return true;
};
