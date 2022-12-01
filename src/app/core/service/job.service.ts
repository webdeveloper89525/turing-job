import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IJob } from '../model/job.model';

export const PAGE_SIZE = 10;
const API_URL = 'https://www.turing.com/api/remote-jobs'

@Injectable({
  providedIn: 'root',
})
export class JobService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
  }

  getJobs(param?: { offset?: number, skillIds?: number[] }): Observable<IJob[]> {
    let params = <{
      sortBy: string,
      limit: number,
      locale: string,
      offset?: number,
      skillIds?: string,
    }>{
      sortBy: 'publishedOnJobBoard,desc',
      limit: PAGE_SIZE,
      locale: "en",
    };

    const {offset, skillIds} = param || {};

    if (offset) {
      params.offset = offset;
    }

    if (skillIds && skillIds.length > 0) {
        params.skillIds = skillIds.join(",")
    }

    return this.http
      .get<IJob[]>(API_URL, { ...this.httpOptions, params })
      .pipe(retry(1), catchError(this.handleError));
  }

  getJob(jobId: string): Observable<IJob> {
    const params = {
      id: jobId
    }

    return this.http
      .get<IJob>(API_URL + '/description', { ...this.httpOptions, params })
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
