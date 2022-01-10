import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Userlogininfo } from '../userlogininfo';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  datasaved = false;
  message: string;
  status:string;

  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) { }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  
  onSubmit(){
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(logininfo:Userlogininfo) {
    this.accountservice.userlogin(logininfo).subscribe(
      (resResult) => {
        let resp=JSON.stringify(resResult);
        console.log(resp);
         this.datasaved = true;
         this.message = resResult['msg'];
         this.status = resResult['status'];
         if(resResult['status']=='success'){
         localStorage.setItem('Loginuser',resp)
         }else{
           localStorage.removeItem('Loginuser');
         }
        this.loginForm.reset();
       }
    )
  }

}

