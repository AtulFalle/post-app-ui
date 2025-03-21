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
    return this.http.get<Post[]>('assets/json/get-post.json').pipe(map((res: any) => res.data));
  }
}
