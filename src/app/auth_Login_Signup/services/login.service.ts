import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { url } from './../../../environments/configuration';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  
  authenticate(lDetails){ 
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post( url + 'authenticate', lDetails, {headers:headers})
    .map(res => res.json());
  }
  onSignup(formValues){
    console.log(formValues);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post( url + 'eventUser/createNewUser', JSON.stringify(formValues), {headers:headers})
    .map(res => res.json());
  }
}
