

function mudandoEstado(button) {
    if (button.classList.contains("aberto")) {
        button.classList.remove("aberto");
        button.classList.add("em-uso");
        button.textContent = "Em Uso";
    }
    else if (button.classList.contains("em-uso")) {
        button.classList.remove("em-uso");
        button.classList.add("manutencao");
        button.textContent = "Em Manutenção";
    }
    else {
        button.classList.remove("manutencao");
        button.classList.add("aberto");
        button.textContent = "Aberto";
    }
}

axios({
    method: 'GET',
    url: './dados.json'
})

.then((response) => {
console.log(response.data[2].color)
//    Estados

   const buttons = document.querySelectorAll('.estado');
   
  
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

//    cores 

const color = document.querySelectorAll('.aberto');
const color2 = document.querySelectorAll('.manutencao');
console.log(color2)

console.log(color)

//green 
green = response.data[0].color;
yellow = response.data[2].color;



color[1].style.backgroundColor = `${green}`;
color[2].style.backgroundColor = `${green}`;
color[3].style.backgroundColor = `${green}`;
color[4].style.backgroundColor = `${green}`;
color[5].style.backgroundColor =  `${green}`;
color[6].style.backgroundColor =  `${green}`;

//yellow 

color2[1].style.backgroundColor = `${yellow}`;
color2[2].style.backgroundColor = `${yellow}`;

   
})