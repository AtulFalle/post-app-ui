import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }


  getPosts(): Observable<Post[]> {
    return of([{
      "title": "post 1",
      "description": "this is description for post 1"
    },
    {
      "title": "post 2",
      "description": "this is description for post 2"
    }])
    return this.http.get<Post[]>('assets/json/get-post.json').pipe(map((res: any) => res.data));
  }
}
