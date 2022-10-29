function meuEscopo () {
 const form = document.querySelector('.form');
 const resultado = document.querySelector('.resultado');
 const pessoas = [];


const nome = form.querySelector('.Nome');
const Sobrenome = form.querySelector('.Sobrenome');
const Peso = form.querySelector('.Peso');
const Altura = form.querySelector('.Altura');

pessoas.push({
    nome: nome.value, 
    Sobrenome: Sobrenome.value,
    Peso: Peso.value,
    Altura: Altura.value
});
console.log(pessoas);
resultado.innerHTML += `<p>${nome.value} ${Sobrenome.value} ${Peso.value} ${Altura.value}</p>`; 
 }
 form.addEventListener('submit' , recebeEvento);

meuEscopo();