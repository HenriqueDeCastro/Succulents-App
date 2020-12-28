import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  public User: IUser;
  public UserForm: FormGroup;

  constructor(private fb: FormBuilder,
              public router: Router) { }

  ngOnInit(): void {
    this.RecebeserLogado();
  }

  RecebeserLogado(): void{
    this.Form(JSON.parse(localStorage.getItem(environment.VariavelUsuario)));
  }

  Form(user: IUser) {
    this.UserForm = this.fb.group({
      nome: [{value: user.fullName, disabled: true}],
      cpf: [{value: user.cpf, disabled: true}],
      data: [{value: user.dataNascimento, disabled: true}],
      telefone: [{value: user.phoneNumber, disabled: true}],
      email: [{value: user.email, disabled: true}],
    });
  }
}