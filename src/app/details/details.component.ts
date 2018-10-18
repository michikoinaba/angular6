import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details$: Object;
  
    //pass the alpha2Code param 
 constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.details$ = params.code );
  }

  ngOnInit() {
     //pull the selected country's data from api 
      //getDetails() is in the data.service.ts
    this.data.getDetails(this.details$).subscribe(
      data => this.details$ = data 
    );
      

  }

}
