/* eslint-disable */
export interface ErrorCodes {
  [key: string]: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
  field: string | null;
}

export const ERROR_CODES = {
  'sec.auth_data_invalid': 'Invalid email or password',
  'sec.confirmation_code_invalid': 'Code is invalid',
  'bus.invalid_registration_step': 'You have already completed this step',
  'bus.email_already_exists': 'This email is already registered',
  'bus.password_change_request_invalid': 'Password change request is invalid',
  ACCESS_TOKEN_EXPIRED: 'sec.access_token_expired',
  REFRESH_TOKEN_EXPIRED: 'sec.refresh_token_expired',
};

