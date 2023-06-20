@import url('https://fonts.googleapis.com/css2?family=Figtree&display=swap');

* {
    box-sizing: border-box;
    font-family: 'Figtree', sans-serif;
}

body {
    height: 100vh;
    background-color: rgb(215, 215, 215);
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    margin: 0rem;
    
}
.logo{
    margin-top: 10rem;
}

.quadrado{
    margin-left: 10px;
}

.sinalizadores{
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 0.5rem 0.5rem;
    gap: 0.5%;
}

.quadrado{
    width: 10px;
    height: 10px;
    border: 1px solid #000;
}

.sinalizadores p{
    font-size: 16px;
    font-weight: bold;
}

.bloco{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
}

.armarios{
    width: 75%;
    height: 75%;
    display: flex;
    justify-content: center;
    place-items: center;
    gap: 2%;
    padding: 0.5rem 1rem;
}

.armario{
    position: relative;
    width: 250px;
    border: 3px solid #000;
    aspect-ratio: 10 / 14;
    border-radius: 1rem;
    background-color: rgb(0,0,0, 15%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
}

.estado{
    display: flex;
    border: 3px solid #000;
    width: 150px;
    aspect-ratio: 16/5;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0px 0px 0px #000;
    transition: .3s;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
}

.estado:hover{
    cursor: pointer;
    box-shadow: -5px 5px 0px #000;
    
}

.aberto{
    background: green;
}

.em-uso{
    background: red;
}

.manutencao{
    background: yellow;
}

.verde{
    background: green;
}

.vermelho{
    background: red;
}

.amarelo{
    background: yellow;
}

@media screen and (max-width: 400px) {
   
    .armarios{
        width: 100%;
        height: 75%;
        display: flex;
        justify-content: center;
        place-items: center;
        gap: 2%;
        padding: 0.5rem 1rem;
    }

    h3{
        font-size: 14px;
    }

    button{
        width: 3px;
        height: 30px;
        
    }

    .estado{
        font-size: 9px;
    }
    
}

