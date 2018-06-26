import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import { Quote } from '@app/models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  api: string = environment.api;

  constructor(private http: HttpClient) { }

  add(quote: Quote): Observable<any>{

		let api = this.api + 'quotes';

		return this.http.post(api, quote);	
  }

  get(id: string): Observable<any>{
    let api = this.api + `quotes/${id}`;

    return this.http.get(api);
  }
}