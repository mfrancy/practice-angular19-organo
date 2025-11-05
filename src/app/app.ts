import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalhos } from './components/cabecalhos/cabecalhos';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Cabecalhos, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('organo');
}
