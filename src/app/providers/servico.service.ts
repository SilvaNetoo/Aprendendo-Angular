import { Produto } from './../model/produto.model';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoService {

private user : User = { email : 'admin', senha : 'admin' }
private produtos: Array<Produto> = new Array<Produto>();

loginIsValid : boolean;
  
constructor() {}


validatorLogin(user):boolean{
  /// lógica de verificaçã
  if(this.user.email === user.email && this.user.senha === user.senha){
    return this.loginIsValid = true;
  }else{
    return this.loginIsValid = false;
  }
}

adicionaProduto(produto):void{
  this.produtos.push(produto);
}


getProdutos(){
  return this.produtos;
}






}
