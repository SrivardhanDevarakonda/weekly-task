import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ngzone-component',
  templateUrl: './ngzone-component.component.html',
  styleUrls: ['./ngzone-component.component.css']
})
export class NgzoneComponentComponent implements OnInit {

loading = 0;

  constructor(private _ngzone : NgZone) {}

  zoneinside(){
    this.loading = 0;
    this.increaseloading(() => {
    console.log('inside loading completed');
    });
  }

   zoneoutside(){
    this.loading = 0;
    this._ngzone.runOutsideAngular(() => {
      this.increaseloading(() =>{
        this._ngzone.run(() => {
          console.log('outside loading completed');
        });
      });
    });
  }

  increaseloading(done :() => void){
    this.loading += 1;
    console.log('Loading : ${this.loading}%');
    if(this.loading <= 100){
        window.setTimeout(() => {this.increaseloading(done)} , 10);
    }
    else
      done();
  }

  ngOnInit() {
  }

}
