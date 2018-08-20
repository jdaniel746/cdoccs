import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class PersonaList {
    personas: Persona[] = [];
}
