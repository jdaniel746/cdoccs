import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;

  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit() {
 this.userForm = this.frmBuilder.group({
  
    });
  }

}
