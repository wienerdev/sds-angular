import { Component, OnInit } from '@angular/core';
import { DadosCandidatosShareService } from 'src/app/service/dados-candidatos-share.service';

@Component({
  selector: 'app-media-imc-por-idade',
  templateUrl: './media-imc-por-idade.component.html',
  styleUrls: ['./media-imc-por-idade.component.css']
})
export class MediaImcPorIdadeComponent implements OnInit {

  constructor(public dadosCandidatosShareService: DadosCandidatosShareService) { }

  ngOnInit(): void {
  }

}
