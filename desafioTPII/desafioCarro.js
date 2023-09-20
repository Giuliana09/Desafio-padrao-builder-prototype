// Definindo Partes do Carro
class Motor{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Carroceria{
    constructor(estilo){
        this.estilo = estilo;
    }
}

class Rodas {
    constructor(tamanho){
        this.tamanho = tamanho;
    }
    //IMPLEMENTANDO DO PADRÃO PROTOTYPE
    clonarRodas(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

class Interior{
    constructor(cor){
        this.cor = cor;
    }
    //IMPLEMENTANDO DO PADRÃO PROTOTYPE
    clonarInterior(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

// Builder
class CarroBuilder{
    constructor() {
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.interior = null;
    }

    adicionarMotor(tipo) {
        this.motor = new Motor(tipo);
        return this;
    }

    adicionarCarroceria(estilo) {
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    adicionarRodas(tamanho) {
        this.rodas = new Rodas(tamanho);
        return this;
    }

    adicionarInterior(cor) {
        this.interior = new Interior(cor);
        return this;
    }

    construir() {
        if (this.motor && this.carroceria && this.rodas && this.interior) {
            return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
        } else {
            throw new Error("Todas as partes do carro devem ser definidas antes de construir.");
        }
    }

}

//IMPLEMENTANDO DO PADRÃO PROTOTYPE

class Personalizar {
    constructor() {
        this.rodas = {};
        this.interior = {};
    }

    mudarRodas(tamanho, id) {
        this.rodas[id] = tamanho.clonarRodas(); // Clona as rodas ao armazená-las
    }

    getRodas(id) {
        return this.rodas[id];
    }

    mudarInterior(cor, id) {
        this.interior[id] = cor.clonarInterior(); // Clona o interior ao armazená-lo
    }

    getInterior(id) {
        return this.interior[id];
    }
}
const maneger1 = new Personalizar();




// Construindo Carro
class Carro{
    constructor(motor, carroceria, rodas, interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    mostrarDetalhes() {
        console.log(`Carro com motor ${this.motor.tipo}, carroceria ${this.carroceria.estilo},
        rodas de tamanho ${this.rodas.tamanho} e interior na cor ${this.interior.cor}`);
    }
}

// UTILIZAÇÃO ######################################################
const builder = new CarroBuilder();

console.log('|__________DADOS ORIGINAIS____________|\n')
const carroEsportivo = builder
    .adicionarMotor('V8')
    .adicionarCarroceria('Esportiva')
    .adicionarRodas(18)
    .adicionarInterior('Preto')
    .construir();

// Agora você pode mostrar os detalhes originais do carro esportivo
carroEsportivo.mostrarDetalhes();
    
    console.log('\n|__________CLONANDO____________|\n')
    
    // ADICIONANDO IDs 
    maneger1 .mudarRodas(carroEsportivo.rodas, 1);
    maneger1 .mudarInterior(carroEsportivo.interior, 1);
    
    // CLONANDO
    const rodasPersonalizadas1 = maneger1.getRodas(1);
    const interiorPersonalizado1 = maneger1.getInterior(1);

    // MODIFICANDO
    
rodasPersonalizadas1.tamanho = 11;
interiorPersonalizado1.cor = 'Caramelo';
    
    
console.log(`Roda Personalizada: ${rodasPersonalizadas1.tamanho}`);
console.log(`Interior Personalizado: ${interiorPersonalizado1.cor}`);

