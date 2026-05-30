const express = require('express');
const app = express();
const porta = 3000;

const frasesBalada = [
  "Bora bill, hoje tem!",
  "Se não for pra causar, nem desce", 
  "Sextou com S de saideira",
  "Quem tá vivo aparece",
  "Hoje a culpada é a tequila"
];

app.get('/', (req, res) => {
  res.send('API da Balada no ar! Use /frase pra uma frase aleatória.');
});

app.get('/frase', (req, res) => {
  const aleatoria = frasesBalada[Math.floor(Math.random() * frasesBalada.length)];
  res.json({ frase: aleatoria });
});

app.listen(porta, () => {
  console.log(`Servidor da balada rodando em http://localhost:${porta}`);
});