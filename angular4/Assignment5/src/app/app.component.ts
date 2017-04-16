import { OnInit } from '@angular/core';
import { UsersService } from './Services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inactiveUsers = [];
  activeUsers = [];

  constructor( private usersService: UsersService ) {
    
  }

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
