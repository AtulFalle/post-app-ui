import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Post } from '../../models/post.model';
@Component({
  selector: 'app-post-detail',
  imports: [ MatButtonModule, MatCardModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {

  @Input() post!: Post;
}
