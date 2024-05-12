import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../MyService';
import { IUser } from '../../../Model/IUser';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  myForm: FormGroup;
  jsonData: any;

  constructor(private myService: MyService) {
    this.myForm = new FormGroup({
      UserName: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const newUser: IUser = {
      UserName: this.myForm.get('UserName')?.value,
      PasswordHash: this.myForm.get('Password')?.value,
    };
    
    this.myService.signin(newUser);
  }
}
