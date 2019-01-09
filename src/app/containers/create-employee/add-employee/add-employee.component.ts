import {Component, OnInit, Inject} from '@angular/core';
import {addEmployeeLocales} from './locales';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [
    {provide: addEmployeeLocales, useValue: addEmployeeLocales}
  ]
})
export class AddEmployeeComponent implements OnInit {
  // locale = locales;

  constructor(@Inject(addEmployeeLocales) public locales) {
  }

  saveEmployee(employeeForm: any): void {
    console.log(employeeForm.value);
  }

  ngOnInit() {
  }

}
