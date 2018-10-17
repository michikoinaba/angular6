import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

  searchText = searchText.toLowerCase();

//return items.filter( it => {
  //    return it.toLowerCase().includes(searchText);
//return items.filter(it => it.name.indexOf(searchText) !== -1);
   return items.filter(it => it.name.indexOf(searchText) > -1 );
    });
   }
}
