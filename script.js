var numeroUno = 1;
let texto = 'Texto de ejemplo';
numeroUno = 2;
const array = [1, 2, 3, 'cuatro', 5];
let numeroDos = 5;




//operadores simples
console.log('Suma:', numeroUno + numeroDos);
console.log('Multiplicación:', numeroUno * numeroDos);
console.log('Resta:', numeroUno - numeroDos);
console.log('División:', numeroUno / numeroDos);
console.log('Cubo de numeroUno:', numeroUno ** 3);
console.log('Resto de numeroUno/numeroDos:', numeroUno % numeroDos);



//bucles basicos
let numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let num of numeros) {
    suma += num;
}
console.log('Suma total:', suma);

// buscar numero maximo
let max = Math.max(...numeros);
console.log('Número más alto:', max);

// Recorrer array y modificar valores
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 5) {
        console.log(`'${numeros[i]}' es mayor o igual a 5. El resultado es ${numeros[i] + 1}`);
        numeros[i] += 1;
    } else {
        console.log(`'${numeros[i]}' es menor que 5. El resultado es ${numeros[i] - 1}`);
        numeros[i] -= 1;
    }
}

// contando elementos del array
console.log('Número de elementos en el array:', numeros.length);

//repeticiones de palabras
let palabras = array.filter(item => typeof item === 'string');
let conteoPalabras = palabras.length;
console.log('Número de palabras en el array:', conteoPalabras);