import { Component  } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

/*
class Country {
   
  name: string;
  
}//class
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-project';
}

/*
export class CountryComponent implements OnInit {
    countriesObservable : Observable<Country[]>;

    constructor(private httpClient:HttpClient) {}

    ngOnInit() {
        this.countriesObservable = this.httpClient
            .get<Country[]>("https://restcountries.eu/rest/v2/all")
           // .do(console.log);
    }




}//class
*/
