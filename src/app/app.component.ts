
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result=0;
  calc(t1,t2,op){
    t1=parseInt(t1);
    t2=parseInt(t2);
switch(op){
  case 'addition':this.result= t1+t2;break;
  case 'subtraction':this.result=t1-t2;break;
  case 'multiplication':this.result=t1*t2;break;
  case 'division':this.result=t1/t2;break;
}
}
}
