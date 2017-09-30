import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toString().toLowerCase();
    console.log("items", items);

    return items.filter( 
      it => {
        return it.patient.toString().toLowerCase().includes(searchText) + it.complaint.toString().toLowerCase().includes(searchText);
        });
   
    }

}