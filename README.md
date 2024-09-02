# Proyecto de Clases en TypeScript

Este proyecto contiene una implementación en TypeScript de una clase abstracta `Carro` y una clase derivada `CarroDeportivo`. El objetivo es demostrar conceptos de programación orientada a objetos, como la herencia, la abstracción, el encapsulamiento y el polimorfismo en TypeScript.

## Estructura del Proyecto

- **Carro**: Clase abstracta que define las propiedades y métodos básicos de un carro, incluyendo métodos privados y públicos.
- **CarroDeportivo**: Clase derivada de `Carro` que implementa el método abstracto `chancla` y extiende la funcionalidad con una propiedad adicional `velocidadMaxima`.

## Clases

### `Carro`

- **Propiedades Privadas**:
  - `marca`: Marca del carro.
  - `modelo`: Modelo del carro.
  - `año`: Año de fabricación del carro.

- **Propiedades Estáticas**:
  - `tipoDeVehiculo`: Tipo de vehículo, establecido como `'Carrazo'`.

- **Métodos Públicos**:
  - `obtenerMarca()`: Retorna la marca del carro.
  - `obtenerModelo()`: Retorna el modelo del carro.
  - `obtenerAño()`: Retorna el año de fabricación del carro.
  - `describir()`: Retorna una descripción del carro en formato de cadena.
  - `mostrarInformacion()`: Muestra información interna del carro y su edad.

- **Métodos Privados**:
  - `calcularEdad()`: Calcula la edad del carro basado en el año actual.
  - `mostrarInformacionInterna()`: Muestra información interna del carro en la consola.

- **Método Abstracto**:
  - `chancla()`: Método que debe ser implementado por las clases derivadas.

### `CarroDeportivo`

- **Propiedad Privada**:
  - `velocidadMaxima`: Velocidad máxima del carro deportivo.

- **Métodos Públicos**:
  - `obtenerVelocidadMaxima()`: Retorna la velocidad máxima del carro deportivo.
  - `describir()`: Sobrescribe el método `describir()` de la clase base para incluir la velocidad máxima.

- **Métodos Implementados**:
  - `chancla()`: Implementa el método abstracto `chancla()` para imprimir un mensaje específico.

## Ejemplo de Uso

```typescript
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
