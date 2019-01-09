import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListOfEmployeeComponent} from './list-of-employee.component';
import {EmployeeItemComponent} from '../employee-item';
import {MatCardModule} from '@angular/material';

describe('ListOfEmployeeComponent', () => {
  let component: ListOfEmployeeComponent;
  let fixture: ComponentFixture<ListOfEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListOfEmployeeComponent,
        EmployeeItemComponent
      ],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
