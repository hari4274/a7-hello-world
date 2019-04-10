import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparatmentListComponent } from './deparatment-list/deparatment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/department-list', pathMatch: 'full' }, //Default Route
  // { path: '', component: DeparatmentListComponent },
  { path: 'department-list', component: DeparatmentListComponent},
  { path: 'department-list/:id', component: DepartmentDetailComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeparatmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailComponent]