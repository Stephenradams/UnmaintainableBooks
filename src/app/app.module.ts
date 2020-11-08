import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, BooksPageComponent, BooksListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
