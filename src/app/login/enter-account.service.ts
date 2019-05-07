import { User } from './../core/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from '../core/session.service';




@Injectable({
  providedIn: 'root'
})
export class EnterAccountService {

  citiesUrl: string = 'assets/cities/ukr-cities.json';


  constructor(
              private http: HttpClient
    ) { } 



  async getCities(){
    return await this.http.get<any>(this.citiesUrl).toPromise();
  }
  
  registerUser(user: User): Observable<any>{
    return this.http.post(URL ,user);
  }

}
