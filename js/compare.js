
//car
let carArr = [];

class Car {


    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

// Adds or removes selected cars from car array
function SetCarToCompare(el, carClass) {
    //Doesn't allow more than 2 cars to be selected
    if (carArr.length >= 2 && el.checked) {
        el.checked = false;
        alert('Apenas 2 carros podem ser selecionados por vez')
        return
    }

    if (carClass instanceof Car) {
        //Adds the car to the array if checked 
        if (el.checked) {
            carArr.unshift(carClass);
            //Removes the car from the array if unchecked
        } else {
            carArr.splice(GetCarArrPosition(carArr, carClass), 1);
        }
    } else {
        throw "You need set a Car Class";
    }

    //Debug code
    /* console.log(carArr);
    console.log(carArr.length);

    if (carArr) {
        carArr.forEach(i => { console.log(i) })
    } */
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

// const compare = document.getElementById('');

function UpdateCompareTable() {
    //Imagens
    const compareImg = [
        document.getElementById('compare_image_0'),
        document.getElementById('compare_image_1')
    ]

    //Modelos
    const compareModel = [
        document.getElementById('compare_modelo_0'),
        document.getElementById('compare_modelo_1')
    ]

    //Altura Caçamba
    const compareAlturaCacamba = [
        document.getElementById('compare_alturacacamba_0'),
        document.getElementById('compare_alturacacamba_1')
    ]

    //Altura Veículo
    const compareAlturaVeiculo = [
        document.getElementById('compare_alturaveiculo_0'),
        document.getElementById('compare_alturaveiculo_1')
    ]

    //Altura Solo
    const compareAlturaSolo = [
        document.getElementById('compare_alturasolo_0'),
        document.getElementById('compare_alturasolo_1')
    ]

    //Motor
    const compareMotor = [
        document.getElementById('compare_motor_0'),
        document.getElementById('compare_motor_1')
    ]

    //Potência
    const comparePotencia = [
        document.getElementById('compare_potencia_0'),
        document.getElementById('compare_potencia_1')
    ]

    //Volume Caçamba
    const comparevolumeCacamba = [
        document.getElementById('compare_volumecacamba_0'),
        document.getElementById('compare_volumecacamba_1')
    ]

    //Roda
    const compareRoda = [
        document.getElementById('compare_roda_0'),
        document.getElementById('compare_roda_1')
    ]

    const compareCapacidadeCarga = [
        document.getElementById('compare_capacidadecarga_0'),
        document.getElementById('compare_capacidadecarga_1')
    ]

    //Preço
    const comparePreco = [
        document.getElementById('compare_preco_0'),
        document.getElementById('compare_preco_1')
    ]

    for (let i = 0; i < carArr.length; i++) {
        compareImg[i].innerHTML = `<img width="100%" height="100%" src="${carArr[i].image}"></img>`
    }

    IterateTextCompare(compareModel, 'nome');
    IterateTextCompare(compareAlturaCacamba, 'alturaCacamba');
    IterateTextCompare(compareAlturaVeiculo, 'alturaVeiculo');
    IterateTextCompare(compareAlturaSolo, 'alturaSolo');
    IterateTextCompare(compareCapacidadeCarga, 'capacidadeCarga');
    IterateTextCompare(compareMotor, 'motor');
    IterateTextCompare(comparePotencia, 'potencia');
    IterateTextCompare(comparevolumeCacamba, 'volumeCacamba');
    IterateTextCompare(compareRoda, 'roda');
    IterateTextCompare(comparePreco, 'preco', 'R$');
}

// Function used to iterate over text compare information
// Mainly to used to avoid tons of repeated code
function IterateTextCompare(arr, infoname, prefix = '', suffix = '') {
    if (arr.length <= 0 || infoname == null) return;

    for (let i = 0; i < carArr.length; i++) {
        arr[i].innerHTML = `${prefix} ${carArr[i][infoname]} ${suffix}`
    }
}
