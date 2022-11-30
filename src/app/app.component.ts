import { Component } from '@angular/core';
import { DadosCandidatosShareService } from './service/dados-candidatos-share.service';
import { InfoCandidatosService } from './service/info-candidatos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sds-angular';

  constructor(private infoCandidatoService: InfoCandidatosService, private dadosCandidatosShareService: DadosCandidatosShareService) { }

  ngOnInit(): void {
    this.recuperarInformacoesDosCandidatos();
  }

  recuperarInformacoesDosCandidatos() {
    this.infoCandidatoService.recuperarInformacoesCandidatos().subscribe(candidatosResp => {
      this.infoCandidatoService.processarInformacoesCandidatos(candidatosResp).subscribe(dadosCandidatosResp => {
        this.dadosCandidatosShareService.dadosCandidatos = dadosCandidatosResp;
      });
    });
  }

}
