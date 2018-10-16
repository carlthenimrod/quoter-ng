import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@env/environment';

import { Quote } from '@app/models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  api: string = environment.api;
  pending: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {
    this.updatePending();
  }

  all(params: object = {}): Observable<any> {
    const url = this.api + 'quotes';

    return this.http.get(url, { params: {...params} });
  }

  updatePending(): void {
    this.all({status: ['new', 'pending']}).subscribe((quotes: Quote[]) => {
      this.pending.next(quotes.length);
    });
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
