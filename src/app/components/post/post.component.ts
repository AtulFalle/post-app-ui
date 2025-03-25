import { Component, inject, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private router = inject(Router); 
  @Input() post!:Post;


  viewPost() {
    this.router.navigate(['/post-details', this.post._id])
  }
}
