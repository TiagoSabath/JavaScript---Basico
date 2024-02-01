class Carro{
    marca;
    cor;
    mediaCombustivel;

    constructor (marca,cor,mediaCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.mediaCombustivel = mediaCombustivel;
    }

    calcularViagem(distancia, precoCombustivel){
        return distancia * this.mediaCombustivel * precoCombustivel;
    }
}

const c1 = new Carro('fiat', 'Vermelho', 1 / 15);

console.log(c1.calcularViagem(370, 5).toFixed(2));