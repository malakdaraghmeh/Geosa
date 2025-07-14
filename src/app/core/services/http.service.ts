import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly BASE_API = '';

  constructor(private http: HttpClient) {}

  private getHeaders(
    withToken: boolean,
    contentType: string = 'application/json'
  ): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': contentType });

    if (withToken) {
      const token = localStorage.getItem('token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return headers;
  }

  getData<T>(url: string, withToken = true): Observable<T> {
    return this.http
      .get<T>(`${this.BASE_API}${url}`, {
        headers: this.getHeaders(withToken),
      })
      .pipe(catchError(this.handleError));
  }

  postData<T, U>(url: string, payload: T, withToken = true): Observable<U> {
    return this.http
      .post<U>(`${this.BASE_API}${url}`, payload, {
        headers: this.getHeaders(withToken),
      })
      .pipe(catchError(this.handleError));
  }

  putData<T, U>(url: string, payload: T, withToken = true): Observable<U> {
    return this.http
      .put<U>(`${this.BASE_API}${url}`, payload, {
        headers: this.getHeaders(withToken),
      })
      .pipe(catchError(this.handleError));
  }

  changeStatus<T>(url: string, withToken = true): Observable<T> {
    return this.http
      .put<T>(
        `${this.BASE_API}${url}`,
        {},
        {
          headers: this.getHeaders(withToken),
        }
      )
      .pipe(catchError(this.handleError));
  }

  deleteData<T>(url: string, withToken = true): Observable<T> {
    return this.http
      .delete<T>(`${this.BASE_API}${url}`, {
        headers: this.getHeaders(withToken),
      })
      .pipe(catchError(this.handleError));
  }

  postFormData<T, U>(url: string, payload: T, withToken = true): Observable<U> {
    return this.http
      .post<U>(`${this.BASE_API}${url}`, payload, {
        headers: this.getHeaders(withToken, 'multipart/form-data'),
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('HTTP Error:', error);
    return throwError(() => error.error?.message || 'Unknown error');
  }
}
