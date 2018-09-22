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

  all(): Observable<any> {
    const url = this.api + 'quotes';

    return this.http.get(url);
  }

  get(id: string): Observable<any> {
    const url = this.api + `quotes/${id}`;

    return this.http.get(url);
  }

  add(quote: Quote): Observable<any> {
    const url = this.api + 'quotes';

    return this.http.post(url, quote);
  }

  update(quote: Quote): Observable<any> {
    const url = this.api + `quotes/${quote._id}`;

    return this.http.put(url, quote);
  }
}
