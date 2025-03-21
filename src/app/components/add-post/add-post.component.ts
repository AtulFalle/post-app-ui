import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-post',
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule, FormsModule ,MatButtonModule ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent implements OnInit {

  fb = inject(FormBuilder);
  _snackBar = inject(MatSnackBar);

  postForm!: FormGroup;

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.max(300)]]
    })
  }

  savePost(): void {
    this._snackBar.open('Post Added successfully!!!!', 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });

  }


}
