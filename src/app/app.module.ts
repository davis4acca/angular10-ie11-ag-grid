import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import 'ag-grid-enterprise';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [AppComponent,],
  bootstrap: [AppComponent],
})
export class AppModule { }
