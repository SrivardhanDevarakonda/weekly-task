import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

selectedhero : Hero ;

  h2 : Hero[] = [
    {id : 501 , name : 'vaishu'},
    {id : 502 , name : 'niharika'},
    {id : 503 , name : 'chinna'},
    {id : 504 , name : 'kranthi'},
    {id : 505 , name : 'nikhil'},
    {id : 506 , name : 'ruthwik'},
    {id : 507 , name : 'balu'},
    {id : 508 , name : 'anjali'},
    {id : 509 , name : 'detained'},
    {id : 510 , name : 'kiran'},
  ];


 onSelect(he : Hero) : void {
   this.selectedhero = he;
 } 
  constructor() { }

  ngOnInit() {
  }

}
export class Hero{
id : Number;
name : String;
}
