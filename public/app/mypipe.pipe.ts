import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, searchbutton:string) {

    if(value.length === 0 || searchbutton === ''){
      return value
    }
    

    let dataTopush = [];
    

    for (let data of value){

     
       if(data['name'] == searchbutton){
         dataTopush.push(data)
         console.log(dataTopush, "")
      }
    }
    
  }

}
