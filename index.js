let colecao_estacoes = [
  { Nome: "Verão", DataInicio: "12-22", DataFim: "03-21" },
  { Nome: "Outono", DataInicio: "03-22", DataFim: "06-21" },
  { Nome: "Inverno", DataInicio: "06-22", DataFim: "09-21" },
  { Nome: "Primavera", DataInicio: "09-22", DataFim: "12-21" },
];

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
  if (tipo_comparacao == "and") {
    return data >= data_inicio && data <= data_fim;
  } else if (tipo_comparacao == "or") {
    return data >= data_inicio || data <= data_fim;
  }
};

const retorna_estacao = (estacoes, data) => {
  let ano = data.getFullYear();

  for (let estacao of estacoes) {
    let data_inicio_estacao = new Date(ano + "-" + estacao["DataInicio"] + " 00:00:00");
    let data_fim_estacao = new Date(ano + "-" + estacao["DataFim"] + " 23:59:59");

    let tipo_comparacao = estacao["DataInicio"] == "12-22" ? "or" : "and";

    if (verifica_data_range(data, data_inicio_estacao, data_fim_estacao, tipo_comparacao)) {
      return estacao["Nome"];
    }
  }
};

let data_app = new Date();

const nome_estacao = retorna_estacao(colecao_estacoes, data_app);

console.log(nome_estacao);
