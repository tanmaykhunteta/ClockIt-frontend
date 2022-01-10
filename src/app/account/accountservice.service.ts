import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Accountinfo } from './accountinfo';
import { Userlogininfo } from './userlogininfo';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  createAccount(accountinfo: Accountinfo): Observable<Accountinfo>{

    return this.http.post<Accountinfo>(this.url+'api/register',accountinfo);
  }

  userlogin(logininfo:Userlogininfo):Observable<Userlogininfo>{
   
    return this.http.post<Userlogininfo>(this.url+'api/login',logininfo);
  }
}
