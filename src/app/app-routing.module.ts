import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoadoresPorTipoSanguineoComponent } from './dados/doadores-por-tipo-sanguineo/doadores-por-tipo-sanguineo.component';
import { MediaIdadePorTipoSanguineoComponent } from './dados/media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { MediaImcPorIdadeComponent } from './dados/media-imc-por-idade/media-imc-por-idade.component';
import { PercObesidadePorSexoComponent } from './dados/perc-obesidade-por-sexo/perc-obesidade-por-sexo.component';
import { PessoasPorEstadoComponent } from './dados/pessoas-por-estado/pessoas-por-estado.component';

const routes: Routes = [
  {
    path: 'doadores-por-tipo-sanguineo',
    component: DoadoresPorTipoSanguineoComponent
  },
  {
    path: 'media-idade-por-tipo-sanguineo',
    component: MediaIdadePorTipoSanguineoComponent
  },
  {
    path: 'media-imc-por-idade',
    component: MediaImcPorIdadeComponent
  },
  {
    path: 'perc-obesidade-por-sexo',
    component: PercObesidadePorSexoComponent
  },
  {
    path: 'pessoas-por-estado',
    component: PessoasPorEstadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
