import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Accountinfo } from '../accountinfo';
import { AccountserviceService } from '../accountservice.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';
// import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  dataSaved= false;
  massage:string;
  regForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private fb:FormBuilder, private accountservice: AccountserviceService) { }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.regForm = this.fb.group({
      Name: ['',[Validators.required]],
      Email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
      Password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: ConfirmPasswordValidator('Password', 'confirmPassword')
    });
  }

  onSubmit(){
    let values = this.regForm.value;
    this.createAccount(values);
    this.regForm.reset();
  }

  createAccount(userInfo: Accountinfo){
    this.accountservice.createAccount(userInfo).subscribe(
      (resresult) => {
        // let resres = JSON.stringify(resresult);
        this.dataSaved = true;
        this.massage = resresult['msg'];
        this.regForm.reset();
      }
    )
  }

}
function confirmPassworddValidator(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

