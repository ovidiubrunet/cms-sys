import { environment } from 'src/environments/environment';

export class ApiConstant {

    static readonly API_BASE_URL: string = environment.apiUrl;
    static readonly GUEST_BASE_URL: string = environment.guestUrl;

    static readonly SERVICE_STATUS_MESSAGES = {
      ERROR: 'Error in service: ',
      SUCCESS: 'Service success: '
    };

}
