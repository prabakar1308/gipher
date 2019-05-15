import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private svc: AuthenticationService, private route: Router) {}

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
    this.svc.registerUser(register.value).subscribe(data => {
      this.route.navigate(['login']);
    });
  }
}
