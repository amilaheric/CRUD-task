import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee/employeeService';
import { Employee } from '../shared/Employee.model';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
 @ViewChild('f') formemp: NgForm;
  subscription:Subscription;
  edit: boolean;
  editemployeeindex: number;
  employee: Employee;
  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {
    this.subscription = this.empservice.empedit
    .subscribe(
      (index: number) => {
        this.editemployeeindex = index;
        this.edit = true;
        this.employee = this.empservice.getEmp(index);  
        setTimeout(() => {
        this.formemp.form.patchValue({
          id: this.employee.id,
          firstname: this.employee.firstName,
          lastname: this.employee.lastName,
          address: this.employee.address,          
          city: this.employee.city,
          country: this.employee.country,
          birthdate: this.employee.birthDate,
          postalcode: this.employee.postalCode,
          phone: this.employee.phoneNumber,
        });
      }
    );
    });
  }
  

  onAddEmployee(form: NgForm){
    const value = form.value;
    const newEmployee = new Employee(value.id,value.firstname, value.lastname, value.address,value.city,value.country, value.birthdate, value.postalcode,  value.phone, );
    if(this.edit){
    this.empservice.onupdateEmployee(this.editemployeeindex,newEmployee);
    }
   
    form.reset();
  }

}
