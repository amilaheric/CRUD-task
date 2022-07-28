import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';


import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
 { path: 'employee', component: EmployeeComponent},
 { path: 'edit', component: EditemployeeComponent},

 { path: 'add', component: AddemployeeComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
