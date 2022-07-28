import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/Employee.model';
import { EmployeeService } from './employeeService';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  constructor(private empservice: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.empservice.getEmployees();
    
  }

  delete(empl : any) {
    let indexOf= this.employees.indexOf(empl);
    this.employees.splice(indexOf,1);
 }
 onedit (index:number){
  this.empservice.empedit.next(index);
 }


}
