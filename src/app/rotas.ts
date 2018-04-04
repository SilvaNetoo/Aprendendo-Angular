import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { AdicionaProdutoComponent } from './adiciona-produto/adiciona-produto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROTAS: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'adicionar-temporario', component: AdicionaProdutoComponent },
    { path: 'lista-temporario', component: ListaProdutosComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { 
        path: '**', component: NotFoundComponent
    }
]

export const ROTAS = RouterModule.forRoot(APP_ROTAS);