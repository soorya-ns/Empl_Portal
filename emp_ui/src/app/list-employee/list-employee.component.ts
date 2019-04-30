import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Employee} from "../model/employee.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getEmployees()
      .subscribe( data => {
        console.log(data)
          this.employees = data;
      });
  }

  deleteEmployee(employee: Employee): void {
    this.apiService.deleteEmployee(employee.id)
      .subscribe( data => {
        debugger
        this.employees = this.employees.filter(u => u !== employee);
      })
  };

  editEmployee(employee: Employee): void {
    window.sessionStorage.removeItem("editEmployeeId");
    window.sessionStorage.setItem("editEmployeeId", employee.id.toString());
    this.router.navigate(['edit-employee']);
  };

  addEmployee(): void {
    this.router.navigate(['add-employee']);
  };
}
