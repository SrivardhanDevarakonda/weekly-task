import { Pipe , PipeTransform } from '@angular/core';

@Pipe({name : 'searchPipe'})

export class SearchPipe implements PipeTransform{
   
   transform(products: any[], input: string) {
      if (!input){
        return products
      } 
      else {
        return products.filter(prod =>  prod.productName.toLowerCase().includes(input) )
      }
    }  

}



/*
    arr : IProduct[] = [];
    newArr:IProduct[] = [];

    constructor(private pi:ProductService){
        this.arr = this.pi.getProduct();
    }

    transform(value:string,args:string):any {
        
        this.newArr = [];
        this.arr.forEach(element => {
            if((element.productName).includes(args)){
                this.newArr.push(element);
            }
        });
        return this.newArr;
    }
*/