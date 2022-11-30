import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { PessoasPorEstadoComponent } from './dados/pessoas-por-estado/pessoas-por-estado.component';
import { MediaImcPorIdadeComponent } from './dados/media-imc-por-idade/media-imc-por-idade.component';
import { DoadoresPorTipoSanguineoComponent } from './dados/doadores-por-tipo-sanguineo/doadores-por-tipo-sanguineo.component';
import { MediaIdadePorTipoSanguineoComponent } from './dados/media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { PercObesidadePorSexoComponent } from './dados/perc-obesidade-por-sexo/perc-obesidade-por-sexo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PessoasPorEstadoComponent,
    MediaImcPorIdadeComponent,
    DoadoresPorTipoSanguineoComponent,
    MediaIdadePorTipoSanguineoComponent,
    PercObesidadePorSexoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
