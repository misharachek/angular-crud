import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// containers
import {ListOfEmployeeModule} from './containers/list-of-employee';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListOfEmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
