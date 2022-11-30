import { Component, OnInit } from '@angular/core';
import { DadosCandidatosShareService } from 'src/app/service/dados-candidatos-share.service';

@Component({
  selector: 'app-doadores-por-tipo-sanguineo',
  templateUrl: './doadores-por-tipo-sanguineo.component.html',
  styleUrls: ['./doadores-por-tipo-sanguineo.component.css']
})
export class DoadoresPorTipoSanguineoComponent implements OnInit {


  constructor(public dadosCandidatosShareService: DadosCandidatosShareService) { }

  ngOnInit(): void {
  }

}
