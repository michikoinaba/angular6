import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent} from './countries/countries.component';
import { DetailsComponent } from './details/details.component';

//setup routes 
const routes: Routes = [
 
//show the list of countries
 {
    path: '',
    component: CountriesComponent
  },

//show the details of the selected country
  {
    path: 'details/:code',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
