import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
    userRole: new FormControl('', Validators.required),
    userAddedDate: new FormControl('', Validators.required)
  });

  onRegister(register) {
    console.log(register.value);
  }
}
