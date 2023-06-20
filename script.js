axios({
  method: "GET",
  url: "./dados.json",
}).then((response) => {
  //    Estados

  const buttons = document.querySelectorAll(".estado");

  aberto = response.data[0].estado;
  emUso = response.data[1].estado;
  manutenção = response.data[2].estado;

  

  buttons[0].innerHTML = aberto;                                        
  buttons[1].innerHTML = emUso;
  buttons[2].innerHTML = manutenção;
  buttons[3].innerHTML = aberto;
  buttons[4].innerHTML = aberto;
  buttons[5].innerHTML = aberto;
  buttons[6].innerHTML = manutenção;
  buttons[7].innerHTML = aberto;
  buttons[8].innerHTML = aberto;
  buttons[9].innerHTML = aberto;  
});

function close () {
    
}



//mudando estados

axios({
  method: "GET",
  url: "./dados.json",
}).then((response) => {
  const aberto = response.data[0].estado;
  const emUso = response.data[1].estado;
  const manutencao = response.data[2].estado;

  const verde = response.data[0].color;
  const vermelho = response.data[1].color;
  const amarelo = response.data[2].color;

  const nomes = [aberto, emUso, manutencao];
  const cores = ["verde", "vermelho", "amarelo"];
  let indice = 0;

  function atualizarNome(botao) {
    botao.textContent = nomes[indice];
    botao.classList.remove("verde", "vermelho", "amarelo"); // Remove todas as classes de cor
    botao.classList.add(cores[indice]);

    indice = (indice + 1) % nomes.length;
  }

  const botoes = document.querySelectorAll(".meusBotoes");

  botoes.forEach((botao) => {
    botao.addEventListener("click", function() {
      atualizarNome(this);
    });
  });
});

