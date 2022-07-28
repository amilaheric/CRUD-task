import { Subject } from "rxjs";
import { Employee } from "../shared/Employee.model";

   
   
   export class EmployeeService {
   employeeChanged = new Subject<Employee[]>();
   empedit = new Subject<number>();
    private employee: Employee[] = [
      new Employee(
         1,
         'Test',
         'Test2',
         'Hamdije Cemerlica 10',
         'Sarajevo',
         'Bosnia and Herzegovina',
         '07/27/1996',
         '71000',
         '+38765412896',
      ),
      new Employee (
          3,
          'Sam',
          'Smith',
          'Hamdije Cemerlica 1',
          'Sarajevo',
          'Bosnia and Herzegovina',
          '07/07/1996',
          '71000',
          '+38761222333',
      ),
     ];
  
     addEmployee(emp: Employee) {
        this.employee.push(emp);
        this.employeeChanged.next(this.employee.slice());
      }
      getEmp(index: number) {
        return this.employee[index];
      }

      onupdateEmployee ( index:number,emp:Employee){
        this.employee[index] = emp;
        this.employeeChanged.next(this.employee.slice());
      }
    

      getEmployees() {
        return this.employee.slice();
      }
    

   }