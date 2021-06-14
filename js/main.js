// Defino la función 'sumar'

function sumar(num1, num2) {

    let suma = num1 + num2;
    return suma

}

// Defino 'precio' y 'lugar' con prompts para pedírselos al usuario

let precio = Number(prompt("Ingrese el valor total de los productos adquiridos."))
let lugar = prompt("Ingrese su provincia de residencia para calcular el envío.")

// Defino la función 'enviar' para calcular el envío correspondiente, avise por console.log y luego llamo a la función

function envio() {
    let total = 0

    if (lugar != "" && (lugar === "CABA" || lugar === "Ciudad de Buenos Aires" || lugar === "Capital" || lugar === "Capital Federal" || lugar === "caba" || lugar === "ciudad de buenos aires" || lugar === "capital" || lugar === "capital federal")) {
        total = sumar(precio, 0);
        console.log("El envío de su pedido es gratuito. El valor total es de $" + total + ".")
    } else if (lugar != "" && (lugar === "Buenos Aires" || lugar === "Provincia de Buenos Aires" || lugar === "Bs As" || lugar === "BsAs" || lugar === "buenos aires" || lugar === "provincia de buenos aires" || lugar === "bs as" || lugar === "bsas")) {
        total = sumar(precio, 250);
        console.log("El envío de su pedido es de $250. El valor total es de $" + total + ".")
    } else {
        total = sumar(precio, 500);
        console.log("El envío de su pedido es de $500. El valor total es de $" + total + ".")
    }
}

envio()

// Defino 'precio' y 'lugar' con prompts para pedírselos al usuario



let cart = []

class Producto {
    constructor(id, title, price, stock) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
    }

    getId = function() {
        return this.id;
    }

    getTotal = function(qty) {
         return this.price * qty;
    }

    getBuy = function(qty) {
        return {
            product: this,
            quantity: qty,
            cash: this.getTotal(qty),
        }
    }

    addToCart = function (qty) {
        cart.push(this.getBuy(qty))
    }
}

const crochetOsito = new Producto(1, 'Osito de crochet', 600, 3)
const crochetRatoncitos = new Producto(2, 'Ratoncitos de crochet', 600, 5)
const crochetAnimalitos = new Producto(3, 'Animalitos ficticios de crochet', 600, 2)
const accesorioLlama = new Producto(4, 'Accesorio para celular de llama', 300, 8)
const accesorioPajaros = new Producto(5, 'Accesorio para celular de pájaros', 300, 7)
const cuadroLlama = new Producto(6, 'Cuadro de llama', 1200, 2)
const cuadroBulldog = new Producto(7, 'Cuadro de bulldog', 1200, 4)
const cuadroCierva = new Producto(8, 'Cuadro de cierva', 1200, 2)
const apegoGatitos = new Producto(9, 'Muñecos de apego de gatitos', 900, 10)
const apegoOsitos = new Producto(10, 'Muñecos de apego de ositos', 900, 10)
const apegoConejitos = new Producto(11, 'Muñecos de apego de conejitos', 900, 10)


crochetOsito.addToCart(1)
apegoGatitos.addToCart(1)
cuadroLlama.addToCart(2)
console.log(cart)

console.log(sumar(1,2,100))