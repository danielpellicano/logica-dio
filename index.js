let nome = "Spartacus";
let xp = 1500

if(xp < 1001) {
    console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Ferro');
} else if(xp > 1000 && xp <= 2000) {
  console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Bronze');
} else if(xp > 2000 && xp <= 5000) {
  console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Prata');
} else if(xp > 6000 && xp <= 7000) {
  console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Ouro');
} else if(xp > 7000 && xp <= 8000) {
  console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Platina');
} else if(xp > 8000 && xp <= 9000) {
  console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Ascendente');
} else if(xp > 9000 && xp <= 10000) {
  console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Imortal');
}  else if(xp >= 10001) {
  console.log('Seu Herói Spartacus tem ' + xp + ' e é da nível Radiante');
}