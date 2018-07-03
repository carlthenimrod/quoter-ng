import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import { Quote, Comment } from '@app/models/quote';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  api: string = environment.api;

  constructor(private http: HttpClient) { }

  add(id: String, comment: Comment): Observable<any>{

		let api = this.api + `quotes/${id}/comments`;

		return this.http.post(api, comment);	
  }
}
