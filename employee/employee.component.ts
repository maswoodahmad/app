import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Employee } from './employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  
  constructor( private _empService: EmployeeService) {
    
  }

  ngOnInit() {
    
    this._empService.getEmployee().subscribe(
      data => this.rowData = data,
      error=>console.error(error)
)

  }

  rowData: Employee[] = [];



  colDefs: ColDef[] = [
    
    { field: 'name' },
    { field: 'name' },
    { field: 'name' },
  ];


}
