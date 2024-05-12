import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../MyService';
import { IUser } from '../../../Model/IUser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  myForm: FormGroup;

  constructor(private myService: MyService) {
    this.myForm = new FormGroup({
      UserName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    const newUser: IUser = {
      UserName: this.myForm.get('UserName')?.value,
      Email: this.myForm.get('email')?.value,
      PasswordHash: this.myForm.get('Password')?.value,
    };

    this.myService.createUser(newUser);
  }
}
