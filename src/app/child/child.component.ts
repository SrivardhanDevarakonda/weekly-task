import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-child',
    templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

    @Input()
    childvalue = 0;
    tableclicked = false;

    @Output()
    update : EventEmitter<Number>= new EventEmitter<Number>();

    increement(){
        this.childvalue++;
        this.update.emit(this.childvalue);
    }
    
    decreement(){
        this.childvalue--;
        this.update.emit(this.childvalue);
    }

    table(){
        this.tableclicked = !this.tableclicked;
    }

    constructor() { }

    ngOnInit() { 

    }

}