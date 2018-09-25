import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ProjectStoreComponent } from 'src/app/project-store/project-store.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import  {AuthGuard } from './guard/auth.guard';
import { AuthService } from '../services/auth.service';

const routes: Routes = [
{path:'', redirectTo:'/home',pathMatch:'full'},
{path:'home', component: HomeComponent ,canActivate:[AuthGuard]},
{path:'projects', component: ProjectStoreComponent,canActivate:[AuthGuard]},
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService,AuthGuard],
  bootstrap :[HomeComponent,ProjectStoreComponent]
})
export class AppRoutingModule { }
