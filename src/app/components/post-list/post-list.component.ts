import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-post-list',
  imports: [PostComponent, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {

}
