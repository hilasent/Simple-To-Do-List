import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
