import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BotConductorResponse } from './models/botconductorresponse';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchboxService {

  constructor(private http: HttpClient) {  }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  apiResponseSubject = new Subject<any>();
  searchQuery = new Subject<any>();

  getBotConductorResponse(serviceUrl: string, input: string): Observable<any> {
    return this.http.post<any>(serviceUrl, { message: input }, this.httpOptions);
  }

  publishApiResponse(response: any) {
    this.apiResponseSubject.next(response);
  }

  getApiResponse(): Observable<any> {
    return this.apiResponseSubject.asObservable();
  }

  publishSearchQuery(q: any) {
    this.searchQuery.next(q);
  }

  getSearchQuery(): Observable<any> {
    return this.searchQuery.asObservable();
  }
}
