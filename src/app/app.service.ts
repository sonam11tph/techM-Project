import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { DataAPIs } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(public http: HttpClient) { }
  public getDataInfo(dataParam, getUrl): Observable<any> {
    let response: any;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(getUrl, { headers: headers });
  }
}
