import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private router = inject(Router); 


  viewPost() {
    this.router.navigate(['/post-details'])
  }
}
