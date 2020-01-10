import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BotConductorResponse } from './models/botconductorresponse';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
import { Command } from './models/command.model';


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

  readonly serviceUrl = environment.botConductorApiEndpoint;

  apiResponseSubject = new Subject<any>();
  searchQuery = new Subject<any>();

  getBotConductorResponse(command: Command): Observable<any> {
    this.publishSearchQuery(command.query);
    return this.http.post<any>(this.serviceUrl, { query: command.query }, this.httpOptions);
  }

  triggerBotConductor(command: Command) {
    this.publishSearchQuery(command.query);
    this.http.post<any>(this.serviceUrl, { query: command.query }, this.httpOptions).subscribe(res => this.publishApiResponse(res));
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
