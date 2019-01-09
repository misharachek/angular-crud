import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddEmployeeComponent} from './add-employee';

// @angular material
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
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
    MatButtonModule
  ],
  declarations: [
    CreateEmployeeComponent,
    AddEmployeeComponent
  ],
  exports: [CreateEmployeeComponent]
})
export class CreateEmployeeModule {
}
