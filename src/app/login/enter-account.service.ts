import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EnterAccountService {

  citiesUrl: string = 'assets/cities/ukr-cities.json';


  constructor(
              private http: HttpClient
    ) { } 



    async getCities(){
    return await this.http.get<any>(this.citiesUrl).toPromise().then((res) =>{
     
      let a = res.areas;
      console.log(res, a);
      res = res.areas;
      
    });
    
  }

}
