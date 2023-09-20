class Carro{
    constructor(rodas, interior){
        this.rodas =  rodas;
        this.interior = interior;        
    }

    clonar(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

}

class CarroManager{
    constructor(){
        this.carro = {};
    }

    addCarro(rodas, interior, id){
        const carro = new Carro(rodas, interior, id);
        this.carro[id] = carro;
    }

    getCarro(id){
        return this.carro[id].clonar();
    }

}
    const maneger = new CarroManager();

  // ADICIONANDO
maneger.addCarro(15, 'Preto', 1)
maneger.addCarro(12, 'Branco', 2)
maneger.addCarro(32, 'Cinza', 3)
maneger.addCarro(40, 'Marrom', 4)

// CLONANDO

const carro1 = maneger.getCarro(1)
const carro2 = maneger.getCarro(1)

// MODIFICAR 
carro1.rodas = 18;
carro2.interior = "Azul";
carro2.rodas = 50;

// IMPRIMIR
console.log(maneger.getCarro(1))
console.log(maneger.getCarro(2))
console.log(maneger.getCarro(3))
console.log(maneger.getCarro(4))
console.log('|______________________|')
console.log(carro1)
console.log(carro2)