import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// @angular material
import {MatCardModule} from '@angular/material';

import {EmployeeItemComponent} from './employee-item';
import {ListOfEmployeeComponent} from './root';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    ListOfEmployeeComponent,
    EmployeeItemComponent
  ],
  exports: [ListOfEmployeeComponent]
})
export class ListOfEmployeeModule { }
