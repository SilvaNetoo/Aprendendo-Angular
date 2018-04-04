import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos = [
    {id: '0', nome: 'prod1', valor: 123},
    {id: '1', nome: 'prod2', valor: 321}
  ]

  constructor() { }

  ngOnInit() {
  }

}
