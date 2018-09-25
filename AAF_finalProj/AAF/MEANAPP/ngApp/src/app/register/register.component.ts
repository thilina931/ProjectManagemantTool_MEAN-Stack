import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   name :String;
   username:String;
   email:String;
   password :String;
   
  constructor(
    private validateService:ValidateService,
    private authService : AuthService,
    private router :Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
   // console.log(this.name);
   const user ={
     name: this.name,
     email: this.email,
     username:this.username,
     password: this.password

   }
   //form validate 
  if(!this.validateService.validateRegister(user)){
   // console.log("Please fill all the form !!");
  // this.flashMessage.show('please fill all the form !!', {cssClass: 'alert-danger', timeout:300 });
    Swal('Oops...', 'please fill all the form !!!', 'error');
    return false;

  }
  //email validate
  if(!this.validateService.validateEmail(user.email)){
    //console.log("Please fill the valid Email  !!");
   // this.flashMessage.show("Please fill the valid Email  !!", {cssClass: 'alert-danger', timeout:300 });
   Swal('Oops...', 'please fill the valid Email  !!', 'error');
    return false;

  }
  //register user
  this.authService.registerUser(user).subscribe(data=>{
    if(data.message="User Created Successfull !!"){
      Swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/login']);
      
    }
    else{
      Swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
      });
      this.router.navigate(['/register']);
    }
  })

  }
}
