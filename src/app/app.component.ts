import { Component} from '@angular/core';
import { UbicacionService } from './api/ubicacion.service';
import { Ubicacion } from './api/DTO/ubicacion.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public ubicacionService: UbicacionService, public ubicacion: Ubicacion){
    this.ubicacionService.getEstados().subscribe(estado => this.ubicacion.estados = estado);
    console.log("estados"+JSON.stringify(this.ubicacion.estados));
    this.ubicacionService.getMunicipios().subscribe(municipio => this.ubicacion.municipios = municipio);
    console.log("muni"+JSON.stringify(this.ubicacion.municipios));
    this.ubicacionService.getParroquias().subscribe(parroquia => this.ubicacion.parroquias = parroquia);
    console.log("parro"+JSON.stringify(this.ubicacion.parroquias));
  }
}
