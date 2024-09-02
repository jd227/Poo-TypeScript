"use strict";
class Carro {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    // Métodos públicos para acceder a las propiedades privadas
    obtenerMarca() {
        return this.marca;
    }
    obtenerModelo() {
        return this.modelo;
    }
    obtenerAño() {
        return this.año;
    }
    // Método público (polimorfismo)
    describir() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
    // Método privado
    calcularEdad() {
        const fechaActual = new Date();
        return fechaActual.getFullYear() - this.año;
    }
    // Método privado para mostrar información interna
    mostrarInformacionInterna() {
        console.log(`Información Interna: Marca=${this.marca}, Modelo=${this.modelo}, Año=${this.año}`);
    }
    // Método público que utiliza los métodos privados
    mostrarInformacion() {
        this.mostrarInformacionInterna();
        console.log(`Edad del Carro: ${this.calcularEdad()} años`);
    }
}
Carro.tipoDeVehiculo = 'Carrazo';
// Herencia: clase Deportiva hereda de Carro
class CarroDeportivo extends Carro {
    constructor(marca, modelo, año, velocidadMaxima) {
        super(marca, modelo, año);
        this.velocidadMaxima = velocidadMaxima;
    }
    // Implementación del método abstracto (polimorfismo)
    chancla() {
        console.log('brr brr brr');
    }
    // Método público para obtener la velocidad máxima
    obtenerVelocidadMaxima() {
        return this.velocidadMaxima;
    }
    // Sobreescritura del método describir (polimorfismo)
    describir() {
        return `${super.describir()}, Velocidad Máxima: ${this.velocidadMaxima} km/h`;
    }
}
const miCarroDeportivo = new CarroDeportivo('Ferrari', '488 Spider', 2024, 330);
console.log(CarroDeportivo.tipoDeVehiculo);
console.log(miCarroDeportivo.obtenerMarca());
console.log(miCarroDeportivo.obtenerModelo());
console.log(miCarroDeportivo.obtenerAño());
console.log(miCarroDeportivo.obtenerVelocidadMaxima());
miCarroDeportivo.chancla();
console.log(miCarroDeportivo.describir());
// Método público que utiliza los métodos privados
miCarroDeportivo.mostrarInformacion();
