
let preco = 5.1;
let consumo = 12.00;
let distanica = 300.00; 

console.log("Preço do combustível " + preco);
console.log("Gasto médio de combustível do carro por km " + consumo);
console.log("Distancia em KM da viagem " + distanica);

let litros = (distanica / consumo) * preco;


console.log("O custo da viagem e de R$:" + litros.toFixed(2));