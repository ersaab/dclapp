import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//Shared
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NavbtnsComponent } from './shared/navbtns/navbtns.component';
import { BrandLogoComponent } from './shared/brand-logo/brand-logo.component';
import { FooterComponent } from './shared/footer/footer.component';
//Lender 
import { BaseDesignComponent } from './lender/base-design/base-design.component';
import { InitialPageComponent } from './lender/initial-page/initial-page.component';
import { ProfileQuesComponent } from './lender/profile-ques/profile-ques.component';
import { FrontPageComponent } from './applicant/front-page/front-page.component';
import { QuesPageComponent } from './applicant/ques-page/ques-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbtnsComponent,
    InitialPageComponent,
    BaseDesignComponent,
    ProfileQuesComponent,
    DashboardComponent,
    BrandLogoComponent,
    FooterComponent,
    FrontPageComponent,
    QuesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
