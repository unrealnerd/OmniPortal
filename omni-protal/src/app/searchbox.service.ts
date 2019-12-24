import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BotConductorResponse } from './models/botconductorresponse';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';


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

  readonly serviceUrl = environment.botConductorApiEndpoint;

  apiResponseSubject = new Subject<any>();
  searchQuery = new Subject<any>();

  getBotConductorResponse(query: string): Observable<any> {
    this.publishSearchQuery(query);
    return this.http.post<any>(this.serviceUrl, { message: query }, this.httpOptions);
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
