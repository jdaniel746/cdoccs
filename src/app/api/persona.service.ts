import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { environment } from '../../environments/environment';
import { Persona } from '../models/persona.model';

@Injectable()
export class PersonaService {

  private productUrl = environment.apiUrl + '/personas';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.productUrl);
  }

  addPersona(persona) {
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.productUrl, persona, {headers: headers})
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

      /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
