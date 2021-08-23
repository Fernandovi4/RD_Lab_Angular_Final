import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.html',
  styleUrls: ['./log-in-component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  isLoggedIn: boolean = false
  // returnUrl: string;


  constructor() {
    this.loginForm = new FormGroup({
      "userEmail": new FormControl("test@mail.com", [
        Validators.required,
        Validators.email
      ]),
      "userPassword": new FormControl("", [
        Validators.required,
        Validators.pattern('(^[0-9]*$)')
      ])
    });
  }

  ngOnInit(): void {
  }

  submit(){
    this.submitted = true;
    this.isLoggedIn = true

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // this.router.navigate([this.returnUrl])
  }

}
