import { Component } from '@angular/core';
import { Livro } from './bookInterface';


@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {

  livro: Livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    image:  "https://th.bing.com/th/id/OIP.sr2plA3hLy4UiMA16EHHXwHaLZ?w=186&h=287&c=7&r=0&o=7&pid=1.7&rm=3",
    favorite: false,
    genero: 'Ficção'
  }

  alternarFavorito() {
    this.livro.favorite =!this.livro.favorite
  }

}
