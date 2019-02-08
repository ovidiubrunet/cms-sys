import { environment } from 'src/environments/environment';

export class AuthConstant {

  static readonly BASE_URL: string = environment.oauthUrl;

  // login stuff
  static readonly LOGIN = {
    API_URL: `${AuthConstant.BASE_URL}/oauth/token`,
    CHECK_TOKEN: `${AuthConstant.BASE_URL}/oauth/check_token`,
    GRANT_TYPE: 'password',
    PROJECT_KEY: 'projectstartup',
    PROJECT_AUTH_TYPE: 'parola'
  };

  // register stuff
  static readonly REGISTER = {
    API_URL: `${AuthConstant.BASE_URL}/api/user/registration`,
    CHECK_STATUS: `${AuthConstant.BASE_URL}/api/user`,
    MIN_CHARS: {
      USERNAME: 4
    }
  };

  static readonly SERVICE_STATUS_MESSAGES = {
    ERROR: 'Error in service: ',
    SUCCESS: 'Service success: '
  };

}
