import { ServicoService } from './../providers/servico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  validator : boolean;


  constructor(private service : ServicoService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.validator = this.service.validatorLogin(this.user);
    if(this.validator === true){
      this.router.navigateByUrl("/dashboard");
    }
  }
  

}
