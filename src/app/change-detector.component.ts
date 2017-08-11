import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector : 'app-change',
    changeDetection : ChangeDetectionStrategy.OnPush,
    template : ` Loading : {{loading}}
                <button (click)='change()'>change</button>
     `
})

export class ChangeDetectorComponent {
    loading = 0;
    value = true;
    
    constructor(ref : ChangeDetectorRef){
        //ref.detach();
        setInterval(() => {
            this.loading++
            //ref.markForCheck();
            //ref.detectChanges();
        },500);
        if(this.value){
            ref.reattach();
            //ref.detectChanges();
            //ref.markForCheck();
    }
        else ref.detach();
    }

    change(){
        this.value = !this.value;
    }    

}