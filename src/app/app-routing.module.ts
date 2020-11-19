import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksPageComponent } from './books-page/books-page.component';

const routes: Routes = [
  { path: 'books-list', component: BooksListComponent },
  {
    path: 'books',
    component: BooksPageComponent,
  },
  {
    path: '',
    redirectTo: '/books-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
