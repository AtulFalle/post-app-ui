import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-post-detail',
  imports: [PostComponent, MatButtonModule, MatCardModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {

}
