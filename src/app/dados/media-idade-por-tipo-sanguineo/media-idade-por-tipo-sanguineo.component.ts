import { Component, OnInit } from '@angular/core';
import { DadosCandidatosShareService } from 'src/app/service/dados-candidatos-share.service';

@Component({
  selector: 'app-media-idade-por-tipo-sanguineo',
  templateUrl: './media-idade-por-tipo-sanguineo.component.html',
  styleUrls: ['./media-idade-por-tipo-sanguineo.component.css']
})
export class MediaIdadePorTipoSanguineoComponent implements OnInit {

  constructor(public dadosCandidatosShareService: DadosCandidatosShareService) { }

  ngOnInit(): void {
  }

}
