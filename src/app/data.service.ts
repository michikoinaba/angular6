import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

  //get all countries from api
  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }
    
   //get details for a selected country 
   getDetails(code) {
    return this.http.get('https://restcountries.eu/rest/v2/alpha/'+code)
  }
    
    
}//class
