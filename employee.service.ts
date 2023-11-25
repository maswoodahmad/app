import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee/employee.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operators/catch'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  public url:string ="/assets/data.employee.json/employee.json"
  getEmployee():Observable<Employee []>{
    
    return this._http.get<Employee[]>(this.url)
      .catch(this.errorHandlder);


  }

  errorHandlder(error:HttpErrorResponse){
    return Observable.throw(error.message || "server error");
  }
}
