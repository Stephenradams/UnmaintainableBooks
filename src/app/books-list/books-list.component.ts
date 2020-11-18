import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
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

  path = 'https://reststop.randomhouse.com/resources/authors?lastName=Grisham';
  detailsPath = 'https://reststop.randomhouse.com/resources/works/?start=0&max=3&expandLevel=1&search=Grisham';

  data;
  moreDetailsData;
  cols: string[] = ['key', 'title'];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.path).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  moreDetails() {
    // console.log(authorID);
    const path = this.detailsPath;
    this.http.get(path).subscribe((res) => {
      console.log(res);
      this.moreDetailsData = res;
    });
  }

}
