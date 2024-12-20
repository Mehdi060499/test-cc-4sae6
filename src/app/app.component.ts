import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mehdikallel';
  person : String ='mehdi' ;
  age : Number = 25;
  address : any = {street: 'rue du ...',city:'Ben Arous'};
  hide: boolean = false;
  activated: boolean = false;
  getEmail() {
    return this.person +'@gmail.com';
  }

}
