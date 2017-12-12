import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { url } from './../../../environments/configuration';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }
  getAllEvents(){ 
    var token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Authorization',token);
    return this.http.get( url + 'events/getAllEvents', {headers:headers})
    .map(res => res.json());
  }
  getOrganisers(){
    var token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Authorization',token);
    return this.http.get( url + 'eventUser/getOrganisers', {headers:headers})
    .map(res => res.json());
  }
  addEvent(formValues){
    console.log(formValues);
    var token = localStorage.getItem('token');
    console.log(token);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization',token);
    return this.http.post( url + 'events/createEvent', JSON.stringify(formValues), {headers:headers})
    .map(res => res.json());
  }
}
