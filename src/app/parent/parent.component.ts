import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

    parentvalue = 10;

    updateparent(event){
        this.parentvalue = event;
    }
    constructor() { }

    ngOnInit() { 

    }

}