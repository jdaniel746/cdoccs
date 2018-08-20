import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { environment } from '../../environments/environment';

@Injectable()
export class UbicacionService {

  private productUrl = environment.apiUrl + '/ubicacion';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<any> {
    return this.http.get(this.productUrl+'/estado');
  }

  getMunicipios(): Observable<any> {
    return this.http.get(this.productUrl+'/municipio');
  }

  getParroquias(): Observable<any> {
    return this.http.get(this.productUrl+'/parroquia');
  }
}
