import { Component } from '@angular/core';
import { JsonServerService } from './json-server.service';
import { Post } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Observable<Post[]>;
  newPost: Post = { id: 4, title: 'New Post', postid: 4, author: 'New' };
  updatedPost: Post = {
    id: 4,
    title: 'Updated Post',
    postid: 4,
    author: 'New'
  };

  constructor(private dataService: JsonServerService) {}

  getPosts() {
    this.posts = this.dataService.getPosts();
  }

  addPost() {
    this.dataService.addPost(this.newPost).subscribe(
      () => {
        this.getPosts();
        console.log('Post successful');
      },
      err => console.error(err)
    );
  }

  deletePost() {
    this.dataService.deletePost(4).subscribe(
      () => {
        this.getPosts();
        console.log('Delete successful');
      },
      err => console.error(err)
    );
  }

  updatePost() {
    this.dataService.updatePost(4, this.updatedPost).subscribe(
      () => {
        this.getPosts();
        console.log('Put successful');
      },
      err => console.error(err)
    );
  }
}
