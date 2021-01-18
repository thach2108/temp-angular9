import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { IPayload } from './_middleware';
import { environment } from '../../environments/environment';

const getHttpOptions = (headers?) => {
  if (!headers) {
    headers = {
      'Content-Type': 'application/json'
    };
  }

  return {
    headers: new HttpHeaders(headers)
  };
};

const timeOut = 30000;

@Injectable({
  providedIn: 'root'
})
export class MiddleService {
  constructor(
    private _http: HttpClient
  ) { }

  callApi(payload?: IPayload): Observable<any> {
    const { url, otherUrl, params, method, headers, data } = payload;
    let apiUrl = otherUrl ? otherUrl : `${environment.apiUrl}/${url}`;
    const httpOptions = getHttpOptions(headers);

    if (params) {
      apiUrl +=
        '?' +
        Object
          .keys(params || {})
          .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k] || '')}`)
          .join('&');
    }

    if (method === 'POST') {
      return this._http
        .post<any>(apiUrl, data, httpOptions)
        .pipe(timeout(timeOut))
        .pipe(
          map((res: any) => {
            if (false) { // handle err
              // notify err
              return;
            }
            return res;
          })
        );
    } else if (method === 'PUT') {
      return this._http
        .put<any>(apiUrl, data, httpOptions)
        .pipe(timeout(timeOut))
        .pipe(
          map((res: any) => {
            if (false) { // handle err
              // notify err
              return;
            }
            return res;
          })
        );
    } else if (method === 'DELETE') {
      return this._http
        .delete<any>(apiUrl, httpOptions)
        .pipe(timeout(timeOut))
        .pipe(
          map((res: any) => {
            if (false) { // handle err
              // notify err
              return;
            }
            return res;
          })
        );
    }

    return this._http
      .get(apiUrl, httpOptions)
      .pipe(timeout(timeOut))
      .pipe(
        map((res: any) => {
          if (false) { // handle err
            // notify err
            return;
          }
          return res;
        })
      );
  }
}
