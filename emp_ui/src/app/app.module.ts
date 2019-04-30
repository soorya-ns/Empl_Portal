import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {ApiService} from "./core/api.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    AddEmployeeComponent,
    EditUserComponent,
    EditEmployeeComponent,
    ListUserComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
