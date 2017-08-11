import { AttributeDirective } from './attribute.directive';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test-component/test.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations :[
        TestComponent,
        AttributeDirective
    ],

    imports : [
        BrowserModule,
        FormsModule
    ],

    exports : [
        TestComponent,
        AttributeDirective
    ]

})

export class TestModule{
    
}