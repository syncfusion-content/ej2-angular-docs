import { Component } from '@angular/core';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TreeViewModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {

  public fields: Object;

  private totalNodes: number = 8000;
  private employeesPerDept: number = 20;

  private departments: string[] = [
    'Engineering',
    'Sales',
    'Human Resources',
    'Finance',
    'Marketing',
    'Customer Support',
    'Operations',
    'Legal',
    'Research',
    'IT Infrastructure'
  ];

  private employeeRoles: string[] = [
    'Manager',
    'Senior Engineer',
    'Software Engineer',
    'Business Analyst',
    'QA Engineer',
    'Consultant',
    'Specialist',
    'Coordinator',
    'Executive',
    'Associate'
  ];

  constructor() {
    const orgData = this.generateOrganizationData(
      this.totalNodes,
      this.employeesPerDept
    );

    this.fields = {
      dataSource: orgData,
      id: 'id',
      parentID: 'pid',
      text: 'name',
      hasChildren: 'hasChild',
      isChecked: 'isChecked',
      expanded: 'isExpanded'
    };
  }

  private generateOrganizationData(
    total: number,
    children: number
  ): Object[] {

    const data: any[] = [];
    let index = 0;
    let id = 1;
    let deptIndex = 0;

    while (index < total) {

      const deptId = id++;
      const deptName =
        this.departments[deptIndex % this.departments.length];

      const parentIndex = index;

      data[index++] = {
        id: deptId,
        pid: null,
        name: deptName,
        hasChild: false,
        isChecked: true,
        isExpanded: false
      };

      let childCount = 0;

      for (let i = 0; i < children && index < total; i++) {

        const role =
          this.employeeRoles[i % this.employeeRoles.length];

        data[index++] = {
          id: id++,
          pid: deptId,
          name: `${role} - Employee ${i + 1}`,
          isChecked: true,
          isExpanded: false
        };

        childCount++;
      }

      if (childCount > 0) {
        data[parentIndex].hasChild = true;
      }

      deptIndex++;
    }

    return data;
  }
}


