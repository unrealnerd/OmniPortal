import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BotConductorResponse } from './models/botconductorresponse';
import { Observable } from 'rxjs/internal/Observable';


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

  getSampleResponse(serviceUrl): Observable<BotConductorResponse> {
    return this.http.post<BotConductorResponse>(serviceUrl, { "Message": "cbs" }, this.httpOptions);
  }
}
