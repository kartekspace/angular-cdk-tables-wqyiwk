import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule, NgbModule.forRoot()],
  declarations: [ AppComponent, TableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
