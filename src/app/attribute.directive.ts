import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector : '[attdirstyl]'
})

export class AttributeDirective{
     
     constructor(public elref : ElementRef){
        elref.nativeElement.style.color = 'red';
        elref.nativeElement.style.background = 'black';
        elref.nativeElement.style.fontSize = '40px';
    }

    @HostListener('mouseover') onmouseover(){
      this.changeBackgroundColor('yellow');
    }

    @HostListener('mouseleave') onmouseleave(){
      this.changeBackgroundColor('blue');
    }

    changeBackgroundColor(colour : string){
      this.elref.nativeElement.style.color = colour;
    }
    
}