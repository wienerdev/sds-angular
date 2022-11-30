import { Component, OnInit } from '@angular/core';
import { DadosCandidatosShareService } from 'src/app/service/dados-candidatos-share.service';

@Component({
  selector: 'app-perc-obesidade-por-sexo',
  templateUrl: './perc-obesidade-por-sexo.component.html',
  styleUrls: ['./perc-obesidade-por-sexo.component.css']
})
export class PercObesidadePorSexoComponent implements OnInit {

  constructor(public dadosCandidatosShareService: DadosCandidatosShareService) { }

  ngOnInit(): void {
  }

}
