import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparatmentListComponent } from './deparatment-list/deparatment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' }, //Default Route
  // { path: '', component: DeparatmentListComponent },
  { path: 'departments', component: DeparatmentListComponent},
  { 
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  DeparatmentListComponent,
                                  EmployeeListComponent,
                                  PageNotFoundComponent,
                                  DepartmentDetailComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent
                                ]