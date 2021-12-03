import { MindicadorCurrent } from './../interfaces/miIndicadorCurrent.interface';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MindIndicadorService {

  constructor(private http: HttpClient) { }

  _url:string = environment.urlMindicador;

  showFinancialIndicators(currency:string) :Observable<MindicadorCurrent> {
		const url: string = `${this._url}/${currency}`;
		return this.http.get<MindicadorCurrent>(url)
	}

}
