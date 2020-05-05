import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hambozo'
})
export class HambozoPipe implements PipeTransform {

  transform(empName: string, empGender: string): any {

    if(empGender == "male")
    {
      return "mr : "+empName;
    }
    else
    {
      return "miss: "+empName;
    }




  }

}
