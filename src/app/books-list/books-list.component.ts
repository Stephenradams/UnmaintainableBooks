import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  bookInput = new FormControl('', [
    Validators.required
  ]);

  path = '';

  constructor() {

  }

  ngOnInit(): void {

  }

}
