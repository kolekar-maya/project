import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSubmitted:boolean=false;
  public registration:any;
  constructor(private fb:FormBuilder, private route:Router, private ser:UserService) { }

 
ngOnInit(): void {
  this.registration=this.fb.group({
      name:['',[Validators.required]],
      empId:['',[Validators.required]],
  
  })
}
Submit(){
  this.registration.value;
  console.log(this.registration.value);
  this.isSubmitted=true;
  this.route.navigate(['login']);

  this.ser.postData(this.registration.value).subscribe((res)=>{
    console.log(res);
  })

}
  AlreadyUser(){
    this.route.navigate(['login']);
    console.log("login user");
    
  }
  home(){
        this.route.navigate(['home'])
      }
    

  get f(){
    return this.registration.controls;
  }
  openmodel(){
    console.log(('maya'));
    
    const modelDiv=document.getElementById('myModel');
    if(modelDiv!=null){
      modelDiv.style.display='block';
    }
  }
  closemodel(){
    const modelDiv=document.getElementById('myModel');
    if(modelDiv!=null){
      modelDiv.style.display='none';
    }
  }
}
  
  
  