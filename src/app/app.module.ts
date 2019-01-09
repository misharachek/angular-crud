import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routing';

// @angular material
import {MatToolbarModule} from '@angular/material/toolbar';

// containers
import {ListOfEmployeeModule} from './containers/list-of-employee';
import {CreateEmployeeModule} from './containers/create-employee';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    ListOfEmployeeModule,
    CreateEmployeeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
