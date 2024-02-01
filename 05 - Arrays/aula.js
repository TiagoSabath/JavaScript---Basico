const alunos = ['Joao', 'pedro', 'tiago'];

alunos.push('felipe');  //add no ultimo na lista

alunos.pop();    //remove o ultimo da lista

console.log(alunos);

// Atividade de notas

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma+ nota; 
}

const media  = soma / notas.length;
console.log(media);