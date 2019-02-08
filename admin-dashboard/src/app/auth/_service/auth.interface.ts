export interface AuthLoginInterface {
  username: string;
  password: string;
}

export interface AuthInterfaceLoginSuccessEvent {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  userName: string;
}

export interface AuthInterfaceCheckTokenSuccessEvent {
  active: boolean;
  exp: number;
  user_name: string;
  authorities: string[];
  client_id: string;
  scope: string[];
}

export interface AuthLoginBehaviourInterface {
  show: boolean;
  message?: string;
}

