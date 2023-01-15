alert('esto es un programa para hacer un triagulo con #')
let input = Number(prompt('ingresar numero de lineas'));
let output = '#';
let numero = 1;

/*for(i=1;i<=input;i++){
    console.log(output ,'<br>');
    output += '#' 
}*/

/*do{
    console.log(output ,'<br>')
    output +='#'
    numero++
}while(numero <= input);*/

while (numero <= input) {
    document.write(output ,'<br>');
    output += '#';
    numero++
}

//     -- Algoritmo --

//  ingresar Numero en "input"

//      asignar a "output" el valor '#'

//      asignar a "numero" el valor 1

/*      [iniciar loop]
        - imprimir output;
        - agregar '#' a "outpur"
        -agregar 1 a "numero"
        [fin del loop]
*/

//      -- fin del algoritmo -- 