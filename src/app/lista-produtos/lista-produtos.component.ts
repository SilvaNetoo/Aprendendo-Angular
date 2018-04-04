import { Produto } from './../model/produto.model';
import { ServicoService } from './../providers/servico.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos : Array<Produto> = new Array<Produto>();
  somaValores: number;
  id;
  

  constructor(private servico: ServicoService) {
    this.produtos = this.servico.getProdutos();
  }

  ngOnInit() {
      
  }

  getValorSomado(){
    return this.servico.valor;
  }

  
}
