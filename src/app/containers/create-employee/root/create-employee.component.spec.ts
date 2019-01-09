import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateEmployeeComponent} from './create-employee.component';
import {AddEmployeeComponent} from '../add-employee';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateEmployeeComponent,
        AddEmployeeComponent
      ],
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
