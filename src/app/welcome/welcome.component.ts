import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message ='Some welcome message'
  name=''
  welcomeMessagefromService=''
  //ActivatedRoute
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message);
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }



  handleSuccessfulResponse(response){
    //console.log(response);
    //need welcome data message to return a bean for below
    this.welcomeMessagefromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error){
    //console.log(error);
    //console.log(error.error);
    this.welcomeMessagefromService = error.error.message;
    
  }
}
