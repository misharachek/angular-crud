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
  public previewPhoto = false;

  constructor(@Inject(addEmployeeLocales) public locales) {
  }

  public departments = [
    {value: 'department-1', viewValue: 'DEPARTMENT-1'},
    {value: 'department-2', viewValue: 'DEPARTMENT-2'},
    {value: 'department-3', viewValue: 'DEPARTMENT-3'}
  ];

  public saveEmployee(employeeForm: any): void {
    console.log(employeeForm.value);
  }

  public previewPhotoToggle() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

}
