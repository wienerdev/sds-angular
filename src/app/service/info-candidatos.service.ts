import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidatos } from '../models/candidatos.model';
import { DadosCandidatosVO } from '../models/dados-candidatos.model';

@Injectable({
  providedIn: 'root'
})
export class InfoCandidatosService {

  constructor(private http: HttpClient) { }

  public recuperarInformacoesCandidatos(): Observable<Candidatos[]> {
    const endpoint = "http://localhost:8080/candidatos/informacoes";
    return this.http.get<Candidatos[]>(endpoint);
  }

  public processarInformacoesCandidatos(infoCandidatos: any): Observable<DadosCandidatosVO> {
    const endpoint = "http://localhost:8080/candidatos/informacoes/processar";
    return this.http.post<DadosCandidatosVO>(endpoint, infoCandidatos);
  }
}
