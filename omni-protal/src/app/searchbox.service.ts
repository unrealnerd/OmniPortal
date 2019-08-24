import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BotConductorResponse } from './models/botconductorresponse';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchboxService {

  constructor(private http: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  apiResponseSubject = new Subject<any>();

  getBotConductorResponse(serviceUrl: string): Observable<BotConductorResponse> {
    return this.http.post<BotConductorResponse>(serviceUrl, { message: 'cbs' }, this.httpOptions);
  }

  sendApiResponse(response: any) {
    this.apiResponseSubject.next(response);
  }

  getApiResponse(): Observable<any> {
    return this.apiResponseSubject.asObservable();
  }
}
