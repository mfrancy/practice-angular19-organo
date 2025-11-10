import { Component, signal } from '@angular/core';
import { Cabecalhos } from './components/cabecalhos/cabecalhos';
import { Footer } from './components/footer/footer';
import { ListaLivrosComponent } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [Cabecalhos, Footer, ListaLivrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('organo');
}
