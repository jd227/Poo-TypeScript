abstract class Carro {
    private marca: string;
    private modelo: string;
    private año: number;

    static tipoDeVehiculo: string = 'Carrazo';

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Métodos públicos para acceder a las propiedades privadas
    public obtenerMarca(): string {
        return this.marca;
    }

    public obtenerModelo(): string {
        return this.modelo;
    }

    public obtenerAño(): number {
        return this.año;
    }

    // Método abstracto
    abstract chancla(): void;

    // Método público (polimorfismo)
    public describir(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }

    // Método privado
    private calcularEdad(): number {
        const fechaActual = new Date();
        return fechaActual.getFullYear() - this.año;
    }

    // Método privado para mostrar información interna
    private mostrarInformacionInterna(): void {
        console.log(`Información Interna: Marca=${this.marca}, Modelo=${this.modelo}, Año=${this.año}`);
    }

    // Método público que utiliza los métodos privados
    public mostrarInformacion(): void {
        this.mostrarInformacionInterna();
        console.log(`Edad del Carro: ${this.calcularEdad()} años`);
    }
}

// Herencia: clase Deportiva hereda de Carro
class CarroDeportivo extends Carro {
    private velocidadMaxima: number;

    constructor(marca: string, modelo: string, año: number, velocidadMaxima: number) {
        super(marca, modelo, año);
        this.velocidadMaxima = velocidadMaxima;
    }

    // Implementación del método abstracto (polimorfismo)
    public chancla(): void {
        console.log('brr brr brr');
    }

    // Método público para obtener la velocidad máxima
    public obtenerVelocidadMaxima(): number {
        return this.velocidadMaxima;
    }

    // Sobreescritura del método describir (polimorfismo)
    public describir(): string {
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
