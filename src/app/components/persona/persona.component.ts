import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

import { Persona } from '../../models/persona.model';
import { PersonaList } from '../../models/persona-list.model';
import { PersonaService } from '../../api/persona.service';
import { Ubicacion } from 'app/api/DTO/ubicacion.dto';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  peopleForm: FormGroup;
  pers: Persona[] = [];
  estados;
  municipios;
  parroquias;

  constructor(private personaList: PersonaList, private frmBuilder: FormBuilder, public toastr: ToastsManager, private _route: ActivatedRoute,
    private router: Router, private _vcr: ViewContainerRef, private personaService: PersonaService, public ubicacion: Ubicacion) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.peopleForm = this.frmBuilder.group({
      cedula: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6),Validators.pattern('^[0-9]+$')]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNac: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      tlfLocal: ['', [Validators.required, Validators.maxLength(14)]],
      tlfPersonal: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: ['', Validators.required],
      municipio: ['', Validators.required],
      parroquia: ['', Validators.required],
      observacion: ['', Validators.required],
      nuevo: ['ng', Validators.required],
      pasoFrente: [''],
    });
    this.personaService.getPersonas().subscribe(person => this.pers = person);
    console.log("personasSe:" + JSON.stringify(this.ubicacion));
    this.estados = this.ubicacion.estados;
  }

  submit() {
    if (this.peopleForm.valid) {
      // this.beneficiary.family = this.memberForm.value.MemberData;
      // this.redirect(this.target);
      let persona = {} as Persona;
      persona.cedula = this.peopleForm.value.cedula;
      persona.primerNombre = this.peopleForm.value.nombres;
      persona.primerApellido = this.peopleForm.value.apellidos;
      //  persona.fechaNac = this.peopleForm.value.fechaNac;
      persona.fechaNacimiento = new Date();
      persona.correoElectronico = this.peopleForm.value.email;
      persona.telefonoLocal = this.peopleForm.value.tlfLocal;
      persona.telefonoPersonal = this.peopleForm.value.tlfPersonal;
      persona.ubicacion.id = this.peopleForm.value.parroquia;
      // persona.estado = this.peopleForm.value.estado;
      // persona.municipio = this.peopleForm.value.municipio;
      // persona.parroquia = this.peopleForm.value.parroquia;
      // persona.observacion = this.peopleForm.value.observacion;
      persona.ciclo = "20";
      this.personaList.personas.push(persona);
      console.log("PersonaList:" + JSON.stringify(this.personaList));
      console.log("res." + this.personaService.addPersona(persona));

      // this.peopleForm.reset();
    } else {
      // this.toastr.warning('Debe llenar todos los campos!');
      this.toastr.warning('Debe llenar todos los campos!');
      console.log("form2:" + JSON.stringify(this.peopleForm.value));
      console.log("personasSe:" + JSON.stringify(this.pers));
    }
    console.log("peopleForm:" + JSON.stringify(this.peopleForm.value));
  }

  changeEstado() {
    console.log("estado:" + this.peopleForm.value.estado);
    this.municipios = this.ubicacion.municipios.filter((item) => {
      return item.idPadre === Number(this.peopleForm.value.estado)
    });
  }

  changeMunicipio() {
    console.log("municipios:" + this.peopleForm.value.municipio);
    this.parroquias = this.ubicacion.parroquias.filter((item) => {
      return item.idPadre === Number(this.peopleForm.value.municipio)
    });
  }

  redirect(target) {
    this.router.navigate([target]);
  }

}
