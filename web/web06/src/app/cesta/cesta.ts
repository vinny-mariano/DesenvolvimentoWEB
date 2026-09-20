import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  // Lista JSON com objetos baseados na vitrine
  itensCesta: ItemCesta[] = [
    {
      produto: {
        codigo: 1,
        nome: "Martelo Unha 27mm",
        descritivo: "Martelo com cabo de madeira e cabeça em aço forjado.",
        valor: 49.90,
        valorPromo: 39.90,
        quantidade: 25,
        destaque: 1
      },
      quantidade: 2
    },
    {
      produto: {
        codigo: 2,
        nome: "Chave de Fenda 6mm",
        descritivo: "Chave de fenda com haste em aço temperado.",
        valor: 18.90,
        valorPromo: 15.90,
        quantidade: 40,
        destaque: 0
      },
      quantidade: 1
    }
  ];

  calcularTotal(): number {
    return this.itensCesta.reduce((acc, item) => acc + (item.produto.valor * item.quantidade), 0);
  }
}