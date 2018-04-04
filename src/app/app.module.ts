import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROTAS } from './rotas';
import { ServicoService } from './providers/servico.service';
import { AdicionaProdutoComponent } from './adiciona-produto/adiciona-produto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdicionaProdutoComponent,
    NotFoundComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROTAS
  ],
  providers: [ ServicoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
