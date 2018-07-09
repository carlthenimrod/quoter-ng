import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import { Comment } from '@app/models/quote';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  api: string = environment.api;

  constructor(private http: HttpClient) { }

  add(quoteId: String, comment: Comment): Observable<any>{
		const url = this.api + `quotes/${quoteId}/comments`;

		return this.http.post(url, comment);	
  }

  update(quoteId: String, comment: Comment): Observable<any>{
    const url = this.api + `quotes/${quoteId}/comments/${comment._id}`;

    return this.http.put(url, comment);
  }

  remove(quoteId: String, commentId: String): Observable<any>{
    const url = this.api + `quotes/${quoteId}/comments/${commentId}`;

    return this.http.delete(url);
  }
}
