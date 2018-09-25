import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//formsload

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectStoreComponent } from './project-store/project-store.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SafePipe } from './safe.pipe';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import Swal from 'sweetalert2';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectStoreComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SafePipe,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpModule
    
    
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
