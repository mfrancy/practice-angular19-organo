import { Component, input } from '@angular/core';
import { livros } from '../../mock-livros';
import { LivroComponent } from "../book/book";
import { GeneroLiterario } from '../book/bookInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent, CommonModule],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterarioComponent {

  genero = input.required<GeneroLiterario>();
}
