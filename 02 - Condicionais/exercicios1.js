let precoGasolina = 5.1;
let precoEtanol = 4.4;
let consumoGasolina = 12.00;
let consumoEtanol = 8.00;
let distanica = 300.00; 
const tipoComnustivel = 'Gasolina';


if (tipoComnustivel=== 'Etanol') {
    let litros = (distanica / consumoEtanol) * precoEtanol;
    console.log("O custo da viagem e de R$:" + litros.toFixed(2));
} else{
    let litros = (distanica / consumoGasolina) * precoGasolina;
    console.log("O custo da viagem e de R$:" + litros.toFixed(2));
}





