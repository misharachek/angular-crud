import {Component, OnInit} from '@angular/core';
import {locales} from './locales';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  locale = locales;

  constructor() { }

  saveEmployee(employeeForm: any): void {
    console.log(employeeForm.value);
  }

  ngOnInit() {
  }

}
