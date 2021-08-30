import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service'

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.html',
  styleUrls: ['./log-in-component.css']
})
export class LogInComponent implements OnInit {

  @Output() buttonClick = new EventEmitter<boolean>();

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  isLoggedIn: boolean = false
  currentEmail: string = ''
  currentPassword: string = ''

  constructor(
    private httpService: HttpService
  ) {
    this.loginForm = new FormGroup({
      userEmail: new FormControl("test@mail.com", [
        Validators.required,
        Validators.email
      ]),
      userPassword: new FormControl("123", [
        Validators.required,
        Validators.pattern('(^[0-9]*$)')
      ])
    });
  }

  ngOnInit(): void {}

  submit(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
  }

  public logIn(change: boolean): void {
    this.buttonClick.emit(change);
    this.httpService.logIn(this.currentEmail, this.currentPassword)
    console.log('logIn')
  }

  // public registrateUser(): void {
  //   console.log('from registrateUser')
  //   this.httpService.registration(
  //     'http://localhost:8080/api/auth/register',{
  //       'email': this.loginForm.get('userEmail')?.value,
  //       'password': this.loginForm.get('userPassword')?.value
  //     })
  // }

}
