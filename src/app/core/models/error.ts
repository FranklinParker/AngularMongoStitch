import {HttpErrorResponse} from '@angular/common/http';

export interface Error {
  title: string;
  error: {
    code: number;
    message: string;
  };
}
