import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalhos } from "./components/cabecalhos/cabecalhos";

@Component({
  selector: 'app-root',
  imports: [Cabecalhos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
