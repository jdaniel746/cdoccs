import { UbicacionModel} from './ubicacion.model';

export class Persona {
    id: number;
    cedula: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: Date;
    correoElectronico: string;
    telefonoLocal: string;
    telefonoPersonal: string;
    ubicacion: UbicacionModel;
    direccion: string;
    estado: string;
    municipio: string;
    parroquia: string;
    observacion: string;
    ciclo: string;
}
