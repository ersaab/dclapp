import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './applicant/front-page/front-page.component';
import { QuesPageComponent } from './applicant/ques-page/ques-page.component';
import { BaseDesignComponent } from './lender/base-design/base-design.component';
import { InitialPageComponent } from './lender/initial-page/initial-page.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Lender', component: InitialPageComponent },
  { path: 'Lender/Profile/Questions', component: BaseDesignComponent },
  { path: 'Applicant', component: FrontPageComponent },
  { path: 'Applicant/Mortgage/Application', component: QuesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
