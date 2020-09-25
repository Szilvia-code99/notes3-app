import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addHyphen'
})
export class AddHyphenPipe implements PipeTransform {

  //Pipes are simple functions you can use in template expressions to accept and input value and return a transformed value.
  //Pipes are useful because you can use them throughout your application, while only declaring each pipe once
  transform(value:string ): string{
    return "-${value}-";;
  }

}
