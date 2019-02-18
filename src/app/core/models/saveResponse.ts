import { Error} from './error';

export interface SaveResponse {
  success: boolean;
  error?: Error;
}
