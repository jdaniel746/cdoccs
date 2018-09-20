import { Estado } from '../../models/estado.model';
import { Municipio } from '../../models/municipio.model';
import { Parroquia } from '../../models/parroquia.model';

export class Ubicacion {

    public estados: Estado[];
    public municipios: Municipio[];
    public parroquias: Parroquia[];

  constructor() {}

  static fromJSON(json: any): Ubicacion {
        let object = Object.create(Ubicacion.prototype);
        Object.assign(object, json);
        return object;
    }

}
