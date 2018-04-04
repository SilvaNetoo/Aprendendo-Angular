import { ServicoService } from './../providers/servico.service';
import { Produto } from './../model/produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adiciona-produto',
  templateUrl: './adiciona-produto.component.html',
  styleUrls: ['./adiciona-produto.component.css']
})
export class AdicionaProdutoComponent implements OnInit {

    produto: Produto = new Produto();
  
    constructor(private service: ServicoService) { }
  
    ngOnInit() {
    }
  
    onSubmit(){
      this.service.adicionaProduto(this.produto);
    }

}
