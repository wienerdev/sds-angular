export interface DadosCandidatosVO {
  qtdPessoasPorEstado: Map<string, number>;
  mediaImcPorIdade: Map<string, number>;
  percentuaisObesidadePorSexo: Map<string, number>;
  mediaIdadePorTipoSanguineo: Map<string, number>;
  qtdDoadoresPorTipoSanguineo: Map<string, number>;
}
