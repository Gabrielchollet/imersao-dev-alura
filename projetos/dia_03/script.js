var h2 = document.querySelector('h2');
var h3 = document.querySelector('h3');
var bnt = document.querySelector("div2");

function jogar() {
  alert("Saudações, caro viajante, eu sou o Guardião... ");
  var resposta = prompt("Está a procura da Torre Sem-Fim... Sim ou Não?");
  if (resposta == "Sim") {
    var idade = parseInt(prompt("Diga-me viajante a quantos anos está na Terra e se vencer o desafio lhe levarei até seu destino"));
    document.getElementById('btnJogar').disabled = true;
  } else {
    jogar();
  }
  h2.textContent = "Advinhe o número que estou pensando entre 0 e " + idade;
    
  var vidas = parseInt(Math.random() * 5 + 1);  
  h3.textContent = "Vidas: " + vidas;
  mecanismo(sortearNumero(idade), vidas)
}


function sortearNumero(age) {
  var numeroSecreto = parseInt(Math.random() * age + 1);
} 

function mecanismo(numeroSorteado, life) {
  bnt = `<div class"bntEnviar" id="div2" style="display: block">
      <input type="number" id="numero">
      <button onclick="tentativa()">Enviar</button>
    </div>`
  var chute = parseInt(document.getElementById('numero').value);
  while (life > 0)
    {
      if (chute == numeroSorteado)
        {
          h2.textContent = "Incrível, você acertou ! agora vamos";
          h3.textContent = '';
          break;
        }
      else if (chute < numeroSorteado)
        {
          h2.textContent = "Errado, darei-lhe uma dica: é maior.";
          life--;
          h3.textContent = "Tentativas restantes: " + life;
          break;
        }
      else if (chute > numeroSorteado)
        {
          h2.textContent = "Errado, darei-lhe uma dica: é menor.";
          life--;
          h3.textContent = "Tentativas restantes: " + life;
          break;
        }
      
    }
  if(life == 0)
      {
          h2.textContent = "É uma pena, volte quando estiver pronto."
      } 
}  