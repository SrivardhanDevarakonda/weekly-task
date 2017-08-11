import { PageNotFoundComponent } from './404.component';
import { SearchPipe } from './search.pipe';
import { ExponentPipe } from './exponent.pipe';
import { NgzoneComponentComponent } from './ngzone-component/ngzone-component.component';
import { routerconf } from './app.router';
import { ProductComponent } from './product-component/product.component';
import { ChangeDetectorComponent } from './change-detector.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MyNewComponentComponent } from './first-component/my-new-component.component';
import { SecondComponent } from './second-component/second.component';
import { TestModule } from './test.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculatorComponent } from "app/calculator/calculator.component";


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    MyNewComponentComponent,
    ParentComponent,
    ChildComponent,
    ChangeDetectorComponent,
    ProductComponent,
    NgzoneComponentComponent,
    ExponentPipe,
    SearchPipe,
    CalculatorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TestModule,
    routerconf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
