import { Component, OnInit } from '@angular/core';
import { DadosCandidatosShareService } from 'src/app/service/dados-candidatos-share.service';

@Component({
  selector: 'app-pessoas-por-estado',
  templateUrl: './pessoas-por-estado.component.html',
  styleUrls: ['./pessoas-por-estado.component.css']
})
export class PessoasPorEstadoComponent implements OnInit {

  constructor(public dadosCandidatosShareService: DadosCandidatosShareService) { }

  ngOnInit(): void {
  }

}
