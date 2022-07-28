import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../shared/Employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee/employeeService';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  @ViewChild('f') empForm: NgForm;
 
  constructor(private empservice: EmployeeService) { }
  ngOnInit(): void {
   

  }
  onAddEmployee(form: NgForm){
    const value = form.value;
    const newEmployee = new Employee(value.id,value.firstname, value.lastname,value.address, value.city, value.country, value.birthdate,  value.postalcode,value.phone, );
    // if(this.edit){
    // this.empservice.onupdateEmployee(newEmployee,this.editemployeeindex);
    // }
    // else {
    this.empservice.addEmployee(newEmployee);}
    // this.edit = false;
    //form.reset();
  }

//}
