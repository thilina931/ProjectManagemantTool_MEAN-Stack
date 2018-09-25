import { Component } from '@angular/core';
import{AuthService} from '../services/auth.service';
import{Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(private authService : AuthService,
    private router :Router   
) { }

onLogoutClick(){
 this.authService.logout();
 Swal("you are now log out !!");
 this.router.navigate(['/login']);
 return false;
}
}
