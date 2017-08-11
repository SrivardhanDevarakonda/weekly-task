import { PageNotFoundComponent } from './404.component';
import { CalculatorComponent } from 'app/calculator/calculator.component';
import { ChangeDetectorComponent } from './change-detector.component';
import { SecondComponent } from './second-component/second.component';
import { ProductComponent } from './product-component/product.component';
import { ParentComponent } from './parent/parent.component';
import { MyNewComponentComponent } from './first-component/my-new-component.component';
import { NgzoneComponentComponent } from './ngzone-component/ngzone-component.component';
import { TestComponent } from './test-component/test.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

export const routerdetails : Routes = [
    {path : 'test', component : TestComponent},
    {path : 'ngzone', component : NgzoneComponentComponent},
    {path : 'first', component : MyNewComponentComponent},
    {path : 'parent', component : ParentComponent},
    {path : 'product', component : ProductComponent},
    {path : 'second', component : SecondComponent},
    {path : 'change', component : ChangeDetectorComponent},
    {path : 'calculator', component : CalculatorComponent},
    {path : '' , redirectTo : '/calculator', pathMatch : 'full' },
    {path : '**', component : PageNotFoundComponent}
];

export const routerconf = RouterModule.forRoot(routerdetails);