var h2 = document.querySelector('h2');
var h3 = document.querySelector('h3');
var x = document.getElementById("div2");

function jogar() {
  alert("Saudações, caro viajante, eu sou o Guardião... ");
  var resposta = prompt("Está a procura da Torre Sem-Fim... Sim ou Não?");
  if (resposta == "Sim") {
    var idade = parseInt(prompt("Diga-me viajante qual sua idade e se acertar o desafio lhe levarei até lá"));
    document.getElementById('btnJogar').disabled = true;
  } else {
    jogar();
  }
  h2.textContent = "Advinhe o numero que estou pensando entre 0 e " + idade;
  
  sortearNumero(idade);
}


function sortearNumero(num) {
  var numeroSecreto = parseInt(Math.random() * num + 1);
  var vidas = parseInt(Math.random() * 5 + 1);  
  h3.textContent = "Vidas: " + vidas;
  
  mecanismo(numeroSecreto, vidas)
}

function mecanismo(intX, intY) {
    x.style.dispay = "block";
    var chute = parseInt(document.getElementById('numero').value);
    while (intY > 0) {
        if (chute == intX) {
            h2.textContent = "Você acertou ! agora corra";
            h3.textContent = '';
            break;
        }
        else if (chute < intX) {
            h2.textContent = "Errado, darei-lhe uma dica: é maior.";
            intY = intY - 1;
            h3.textContent = "Tentativas restantes: " + intY;
            break;
        }
        else {
            h2.textContent = "Errado, darei-lhe uma dica: é menor.";
            intY = intY - 1;
            h3.textContent = "Tentativas restantes: " + intY;
            break;
        } 
    }
    if(intY == 0) {
        h2.textContent = "É uma pena, volte quando estiver pronto."
    }
}  