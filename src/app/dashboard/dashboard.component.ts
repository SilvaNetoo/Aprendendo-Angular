import { Router } from '@angular/router';
import { ServicoService } from './../providers/servico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private servico: ServicoService,private rota: Router) {
    if(!servico.loginIsValid){
      rota.navigateByUrl("/");
    }
   }

  ngOnInit() {
  }
  
}
