import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleForm: FormGroup;
  stateList: string[] = ["Distrito Capital", "Miranda", "Lara"];

  constructor(private frmBuilder: FormBuilder, public toastr: ToastsManager, private _route: ActivatedRoute,
    private router: Router, private _vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(_vcr);
    }

  ngOnInit() {
    this.peopleForm = this.frmBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNac: ['', Validators.required],
      email: ['', Validators.required],
      tlfLocal: ['', Validators.required],
      tlfPersonal: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: ['', Validators.required],
      municipio: ['', Validators.required],
      parroquia: ['', Validators.required],
      observacion: ['', Validators.required],
      nuevo: ['ng', Validators.required],
      pasoFrente: ['', Validators.required],
    });
  }

  submit() {
    if (this.peopleForm.valid) {
      // this.beneficiary.family = this.memberForm.value.MemberData;
      // this.redirect(this.target);
      console.log("form1:" + JSON.stringify(this.peopleForm.value));
    } else {
      // this.toastr.warning('Debe llenar todos los campos!');
      this.toastr.warning('Debe llenar todos los campos!');
      console.log("form2:" + JSON.stringify(this.peopleForm.value));
    }
    console.log("benefi:" + JSON.stringify(this.peopleForm.value));
  }

  redirect(target) {
    this.router.navigate([target]);
  }
}
