import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee detail</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }} . {{ employee.name }} - {{ employee.age }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    // Gets called once component has initialized
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);

  }

}
