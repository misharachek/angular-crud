import {Component, Input, OnInit} from '@angular/core';

// locales
import {locales} from './locale';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: any;
  locale = locales;

  constructor() {
  }

  ngOnInit() {
  }
}
