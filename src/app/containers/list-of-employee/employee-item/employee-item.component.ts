import {Component, Inject, Input, OnInit} from '@angular/core';

// locales
import {employeeListLocales} from './locale';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
  providers: [
    {provide: employeeListLocales, useValue: employeeListLocales}
  ]
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: any;

  constructor(@Inject(employeeListLocales) public locales) {
  }

  ngOnInit() {
  }
}
