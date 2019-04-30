import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'edit-employee', component: EditEmployeeComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
