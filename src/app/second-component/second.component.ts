import { Component, OnInit } from '@angular/core';
import {SecondService} from './second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [SecondService]
})



export class SecondComponent implements OnInit {

  name;
  author;
  constructor(second : SecondService) {
    this.name = second.getNames();
    this.author = second.getAuthor();
   }

  ngOnInit() {
  }

}
