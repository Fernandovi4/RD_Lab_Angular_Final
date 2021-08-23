import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({
      "userName": new FormControl(),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "userAge": new FormControl("", [
        Validators.required,
        Validators.pattern('(^[0-9]*$)')
      ])
    });
  }

  ngOnInit(): void {
  }

  submit(){
    console.log('save changes')
  }

}
