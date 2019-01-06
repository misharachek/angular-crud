import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateEmployeeComponent} from './root';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateEmployeeComponent],
  exports: [CreateEmployeeComponent]
})
export class CreateEmployeeModule { }
