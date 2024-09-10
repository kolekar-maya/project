import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmitted:boolean=false;
public loginform:any;
public user1:any;
masegelogin:any;
  constructor( private fb:FormBuilder, private ser:UserService, private route:Router) { }

  ngOnInit(): void {
    this.loginform= this.fb.group({
      name:['',[Validators.required]],
      empId:['',[Validators.required]]

    })
  }
  OnSubmitForm(){
    this.loginform.value;
    console.log(this.loginform.value);
    this.ser.getData1().subscribe((res:any)=>{
      console.log(res, "res");
  
      this.user1=res.find((a:any)=>{
       console.log("a",a);
       console.log(('maya'));
    
      
        return a.empId===this.loginform.value.empId && a.name=== this.loginform.value.name;
      });
        if(this.user1){
          this.openmodel();
        }else{
          this.openmodel1();
        }
     
    },(err:any)=>{
      console.log(err);
      const modelDiv=document.getElementById('myModel');
      if(modelDiv!=null){
        modelDiv.style.display='block';
      }
      // alert('something goes wrong')
      this.masegelogin='something goes wrong'; 
    }
    )
  
  }

  NewUser(){
    this.route.navigate(['register']);
  }
  
get f(){
  return this.loginform.controls;
}
openmodel1(){

  this.masegelogin='Incorrect username or password!'
  const modelDiv=document.getElementById('myModel');
  if(modelDiv!=null){
    modelDiv.style.display='block';
  }
}
openmodel(){
  this.masegelogin='LogIn Successfully Done...';  
  const modelDiv=document.getElementById('myModel');
  if(modelDiv!=null){
    modelDiv.style.display='block';
  }
  this.route.navigate(['mesege'])

}
closemodel(){
  const modelDiv=document.getElementById('myModel');
  if(modelDiv!=null){
    modelDiv.style.display='none';
  }
}

}