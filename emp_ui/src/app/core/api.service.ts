import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Employee} from "../model/employee.model";
import {Observable} from "rxjs/index";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl4Employee: string = 'http://localhost:8080/employees/';
  baseUrl4User: string = 'http://localhost:8080/users/';

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('soorya-client:soorya-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
  }

  getUsers() {
    return this.http.get(this.baseUrl4User + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
  getEmployees() {
    return this.http.get(this.baseUrl4Employee + 'employee?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl4User + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
getEmployeeById(id: number) {
    return this.http.get(this.baseUrl4Employee + 'employee/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: User){
    return this.http.post(this.baseUrl4User + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }
createEmployee(employee: Employee){
    return this.http.post(this.baseUrl4Employee + 'employee?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, employee);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl4User + 'user/' + user.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }
updateEmployee(employee: Employee) {
    return this.http.put(this.baseUrl4Employee + 'employee/' + employee.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, employee);
  }
  deleteUser(id: number){
    return this.http.delete(this.baseUrl4User + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
  deleteEmployee(id: number){
    return this.http.delete(this.baseUrl4Employee + 'employee/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}
