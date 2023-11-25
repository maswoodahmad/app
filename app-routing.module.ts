import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailComponent } from './employee/detail/detail.component';
import { EmployeeFormComponent } from './home/employee-form/employee-form.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'employee', component: EmployeeComponent },
  { path: 'detail/:id', component: DetailComponent },
  {path:'add', component:EmployeeFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComp = [HomeComponent, EmployeeComponent, DetailComponent, EmployeeFormComponent];
