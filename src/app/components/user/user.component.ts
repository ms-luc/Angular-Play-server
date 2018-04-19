import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name : String;
  title: String;
  address : Address;
  skills : string[];
  showSkills: boolean;

  constructor() { 
    console.log("In constructor");
  }

  ngOnInit() {
    console.log("In ngOnInit");
    this.name = 'Jane';
    this.title = 'Developer';
    this.address = {
      street : 'Church St.',
      city : 'Toronto',
      province: 'ON'
    }

    this.skills = ['C++', 'JavaScript', 'Angular']
    this.showSkills = false;

  }
  toggleSkills(){
    console.log("show skills")
    if(this.showSkills ==false){
      this.showSkills = true;
    }
    else{
      this.showSkills = false;
    }
  }

}

interface Address {
  street : String,
  city : String,
  province : String
}