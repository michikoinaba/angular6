import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FilterPipe} from './filter.pipe';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
 providers:[FilterPipe] 
})

export class CountriesComponent implements OnInit {

  countries$: Object;
  searchText;
    
  //pull all countries from api in the data.service.ts  
  constructor(private data: DataService) { }

  ngOnInit() {
  
    this.data.getCountries().subscribe(
      data => this.countries$ = data 
    );
  }

}






