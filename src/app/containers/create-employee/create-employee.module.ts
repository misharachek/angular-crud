import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddEmployeeComponent} from './add-employee';

// @angular material
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule, MatNativeDateModule,
} from '@angular/material';

// root
import {CreateEmployeeComponent} from './root';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    CreateEmployeeComponent,
    AddEmployeeComponent
  ],
  exports: [CreateEmployeeComponent]
})
export class CreateEmployeeModule {
}
