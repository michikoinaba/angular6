import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})

//search logic.  
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
      
  //make the search text lowercase 
  searchText = searchText.toLowerCase();
  
   //filter - show only country names that matche the searchText   
   return items.filter( it => { 
      return it.name.toLowerCase().includes(searchText);
    });
   }
}//class
