function calcularNivel(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel = "_";

  if (vitorias >= 101) {
    nivel = "Imortal";
  } else if (vitorias >= 91) {
    nivel = "Lendário";
  } else if (vitorias >= 81) {
    nivel = "Diamante";
  } else if (vitorias >= 51) {
    nivel = "Ouro";
  } else if (vitorias >= 21) {
    nivel = "Prata";
  } else if (vitorias >= 11) {
    nivel = "Bronze";
  } else {
    nivel = "Ferro";
  }

  return `O herói tem saldo de ${saldo} e está no nível ${nivel} com ${vitorias} vitórias e ${derrotas} derrotas.`;
}

// Chamada da função e exibição do resultado
let resultado = calcularNivel(30, 15);
console.log(resultado);
