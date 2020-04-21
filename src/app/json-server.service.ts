import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  private apiUrl = 'http://localhost:8000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, httpOptions);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + '/' + id, post, httpOptions);
  }

  deletePost(id: number): Observable<{}> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
