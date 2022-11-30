import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Quantidade de Pessoas por Estado',
        routerLink: '/pessoas-por-estado'
      },
      {
        label: 'Média de IMC por Idade',
        routerLink: '/media-imc-por-idade'
      },
      {
        label: 'Média de Idade por Tipo Sanguíneo',
        routerLink: '/media-idade-por-tipo-sanguineo'
      },
      {
        label: 'Percentual de Obesidade por Sexo',
        routerLink: '/perc-obesidade-por-sexo'
      },
      {
        label: 'Quantidade de Doadores por Tipo Sanguíneo',
        routerLink: '/doadores-por-tipo-sanguineo'
      },
      {
        label: 'Candidatos em formato JSON',
        target: "blank",
        url: 'https://s3.amazonaws.com/gupy5/production/companies/52441/emails/1669646172212/e8330670-6f23-11ed-91a8-05f5cf6759fb/data_1.json'
      },
    ];
  }
}
