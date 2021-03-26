var operacao = parseInt(prompt("Digite 1 para fazer uma divisão, 2 para uma multiplicação, 3 para uma adição e 4 para uma subtração"));

while (operacao < 1 | operacao > 4)
{
  alert("Opção inválida");
  var operacao = parseInt(prompt("Digite 1 para fazer uma divisão, 2 para uma multiplicação, 3 para uma adição e 4 para uma subtração"));
}

var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));

var segundoValor = parseInt(prompt("Digite o segundo valor: "));

if (operacao == 1)
  {
    var resultado = primeiroValor / segundoValor

    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
  }
else if (operacao == 2)
  {
    var resultado = primeiroValor * segundoValor

    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
  }
else if (operacao == 3)
  {
    var resultado = primeiroValor + segundoValor

    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
  }
else
  {
    var resultado = primeiroValor - segundoValor

    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
  }
