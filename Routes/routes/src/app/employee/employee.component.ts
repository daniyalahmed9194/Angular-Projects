import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees = [
    {
      empId: '101', empName: 'EmpA', empDept: 'General Mgmt'
    },
    {
      empId: '102', empName: 'EmpB', empDept: 'Markting'
    },
    {
      empId: '103', empName: 'EmpC', empDept: 'Hr dept'
    },
    {
      empId: '104', empName: 'EmpD', empDept: 'Sales deptt'
    }

  ]
}
