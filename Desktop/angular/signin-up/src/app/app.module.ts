
import {​​​​​​ BrowserModule }​​​​​​ from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {​​​​​​ AppRoutingModule }​​​​​​ from './app-routing.module';
import {​​​​​​ AppComponent }​​​​​​ from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './userlogin/userlogin.component';
import {​​​​​​ HttpClientModule}​​​​​​ from '@angular/common/http';
import { AbcComponent } from './abc/abc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent ,
    UserLoginComponent,
    AbcComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
     ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

