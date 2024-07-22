// Función para solicitar el número y validar el rango
const solicitarNumero = () => {
    let numero = parseInt(prompt("Ingresa un número entre 1 y 20:"))
    if (numero < 1 || numero > 20 || isNaN(numero)) {
        console.log("Número fuera del rango")
        document.write("Número fuera del rango")
        return;
    }
    mostrarResultados(numero);
}

// Función para mostrar las tablas de multiplicar y factoriales
const mostrarResultados = (numero) => {
    // Mostrar tablas de multiplicar
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`)
        document.write(`${i} x ${numero} = ${i * numero}<br>`)
    }

    // Mostrar factoriales
    for (let i = 1; i <= numero; i++) {
        console.log(`Factorial de ${i} es: ${calcularFactorial(i)}`)
        document.write(`Factorial de ${i} es: ${calcularFactorial(i)}<br>`)
    }
}

// Función para calcular el factorial utilizando un ciclo for anidado
const calcularFactorial = (n) => {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= i; j++) {
            factorial *= j
        }
    }
    return factorial
}

// Llamar a la función principal
solicitarNumero()
