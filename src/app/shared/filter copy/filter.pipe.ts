import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any =[];
    //if filter string is empty and propertyname(propName) is empty return value as it is
    if(!value || filterString === '' || propName === ''){
      return value;
    }
    //loop inside array and check for the value being passed
    value.forEach((a: any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
