import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  peopleForm: FormGroup;

  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit() {
   this.peopleForm = this.frmBuilder.group({
      
    });
  }

}
