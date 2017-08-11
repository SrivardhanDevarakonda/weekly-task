import { ProductService } from './../product.service';
import { Iproduct } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    providers: [ProductService]
})
export class ProductComponent implements OnInit {

    products: Iproduct[] = [];
    
    constructor(private prodinstance : ProductService ) {
     }

    ngOnInit() : void{ 
        this.products = this.prodinstance.getProduct();
    }

}