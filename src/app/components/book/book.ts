import { Component, input } from '@angular/core';
import { Livro } from './bookInterface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class LivroComponent {

  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorite =!this.livro().favorite
  }

}
