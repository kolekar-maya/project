import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masege',
  templateUrl: './masege.component.html',
  styleUrls: ['./masege.component.scss']
})
export class MasegeComponent implements OnInit {
  constructor(private ser:UserService, private route:Router) { }

  ngOnInit(): void {
   
  }

 

}
