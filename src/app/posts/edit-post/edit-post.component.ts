import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post!: Post;
  postForm !: FormGroup;
  postSub !: Subscription;
  constructor(private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      const id = params.get('id');
     this.postSub = this.store.select(getPostById,{id}).subscribe(data => {
        this.post = data;

        this.createForm();
      })
    })

  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required,Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.minLength(0)])
    })
  }

  onUpdatePost() {
    if(!this.postForm.valid) {
      return;
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description
    const post: Post = {
      id: this.post.id,
      title: title,
      description: description
    }

    this.store.dispatch(updatePost({post}))
    this.router.navigate(['/posts'])

  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm?.valid) {
      if (descriptionForm?.errors?.required) {
        return 'Description is required';
      }
      if(descriptionForm?.errors?.minLength) {
        return 'Description should be a minimum of 10 characters'
      }
    }
    return;
  }

}
