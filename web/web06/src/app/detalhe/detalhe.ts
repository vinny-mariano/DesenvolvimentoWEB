import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css'
})
export class Detalhe {
  produto: Produto = {
    codigo: 1,
    nome: "Martelo Unha 27mm",
    descritivo: "Martelo com cabo de madeira e cabeça em aço forjado, ideal para trabalhos gerais.",
    valor: 49.90,
    valorPromo: 39.90,
    quantidade: 25,
    destaque: 1
  };
}