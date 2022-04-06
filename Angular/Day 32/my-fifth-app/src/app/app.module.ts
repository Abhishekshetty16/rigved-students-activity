import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StudentsActivityComponent } from './students-activity/students-activity.component';
import { ProductsActivityComponent } from './products-activity/products-activity.component';
@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    AttributeBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    StudentsActivityComponent,
    ProductsActivityComponent
  ],
  imports: [
    BrowserModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
