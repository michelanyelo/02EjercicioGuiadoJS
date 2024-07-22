// Función para solicitar el número y validar el rango
const solicitarNumero = () => {
    let numero = parseInt(prompt("Ingresa un número entre 1 y 20:"));
    if (numero < 1 || numero > 20 || isNaN(numero)) {
        console.log("Número fuera del rango");
        document.write("<span style='color: #FF5733; padding: 1rem;'>Número fuera del rango</span>");
        return;
    }
    mostrarResultados(numero);
}

// Función para mostrar las tablas de multiplicar y factoriales
const mostrarResultados = (numero) => {
    // Mostrar título de las tablas de multiplicar
    document.write("<h3 style='color: #12455F; padding: 1rem;'>Tablas de multiplicar</h3>");
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
        document.write(`<span style='color: #12455F; font-weight: 400; padding: 0.5rem 1rem;'>${i} x <span style='color: #EA9A27; font-weight: bold'>${numero}</span> = ${i * numero}</span><br>`);
    }

    // Mostrar título de los factoriales
    document.write("<h3 style='color: #12455F; padding: 1rem;'>Factoriales</h3>");
    for (let i = 1; i <= numero; i++) {
        console.log(`Factorial de ${i} es: ${calcularFactorial(i)}`);
        document.write(`<span style='color: #12455F; padding: 0.2rem 1rem; font-weight: 400'>Factorial de <span style='color: #EA9A27; font-weight: bold'>${i}</span> es: ${calcularFactorial(i)}</span><br>`);
    }
}

// Función para calcular el factorial utilizando un ciclo for anidado
const calcularFactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= i; j++) {
            factorial *= j;
        }
    }
    return factorial;
}

// Llamar a la función principal
solicitarNumero();
