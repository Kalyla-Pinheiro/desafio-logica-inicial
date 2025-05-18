let quantidade = Number(prompt("Quantos heróis você deseja classificar?"));

for (let i = 0; i < quantidade; i++) {
  let nome = prompt(`Digite o nome do ${i + 1}º herói:`);
  let xp = Number(prompt(`Digite a quantidade de XP de ${nome}:`));
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  alert(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
  console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}
