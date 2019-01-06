import {Routes} from '@angular/router';

import {ListOfEmployeeComponent} from './containers/list-of-employee/root';
import {CreateEmployeeComponent} from './containers/create-employee/root';

export const appRoutes: Routes = [
    { path: 'list', component: ListOfEmployeeComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
  ];
