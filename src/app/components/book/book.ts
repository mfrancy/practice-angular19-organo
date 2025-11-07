import { Component, input } from '@angular/core';
import { Livro } from './bookInterface';


@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {

  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorite =!this.livro().favorite
  }

}
