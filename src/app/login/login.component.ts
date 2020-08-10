import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  
  invalidLogin = false
  errorMessage ='invalid Credentials'

  //router injection
  //
  constructor(private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

 
  handleBasicAuthLogin(){
    console.log(this.username);
    console.log(this.password);
      this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome',this.username]);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true
        }
      );
      }    
}
