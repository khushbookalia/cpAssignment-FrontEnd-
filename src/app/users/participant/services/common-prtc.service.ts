import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { url } from './../../../../environments/configuration';

@Injectable()
export class CommonPrtcService {

  constructor(private http: Http) { }
  getAllEvents(){ 
    var token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Authorization',token);
    return this.http.get( url + 'events/getAllEvents', {headers:headers})
    .map(res => res.json());
  }
}
