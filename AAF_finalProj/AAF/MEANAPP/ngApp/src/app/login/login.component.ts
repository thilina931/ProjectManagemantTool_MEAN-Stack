import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import{Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;

  constructor(private authService : AuthService,
              private router :Router   
  ) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    const user={
      username:this.username,
      password:this.password
    }
    this.authService.authenticateUser(user).subscribe(data =>{
      if(data.message ="Auth successsfull !!"){
        console.log(data)
        this.authService.storeUserData(data.token,data.user);
        Swal(
          'Your password valid',
          'Login success !!',
          'success'
        )
        this.router.navigate(['/home']);
      }
      else
      {
        Swal(
          'Your password invalid',
          'Login failed !!',
          'error'
        )
        this.router.navigate(['/login']);
      }
    },err=>{

      
        Swal(
          'Your password invalid',
          'Login failed !!',
          'error'
        )
        this.router.navigate(['/login']);
      

    });
    ;
  }

}
