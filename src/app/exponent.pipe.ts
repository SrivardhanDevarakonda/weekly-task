import { Pipe , PipeTransform } from '@angular/core';

@Pipe({ name : 'exponentPipe' })

export class ExponentPipe implements PipeTransform{
    transform(value : number, exponent : number) : number{
        //let exp = parseFloat(exponent);
        return Math.pow(value , exponent);
    }
   
}

