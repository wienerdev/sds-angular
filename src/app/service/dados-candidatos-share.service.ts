import { Injectable } from "@angular/core";
import { DadosCandidatosVO } from "../models/dados-candidatos.model";

@Injectable({
  providedIn: 'root'
})
export class DadosCandidatosShareService {
  dadosCandidatos!: DadosCandidatosVO;
}
