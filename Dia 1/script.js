a="Hola "
b="Mundo"

console.log(a+b)

// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}

// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}


// Bucle FOR

for (let i=0; i>=10;i-1)
    console.log(i);

    arreglo=[123,"daniel",true]
    console.log(arreglo.length);

    tamaño=arreglo.length




    //################################
    //##                            ##
    //##         Ejercicios         ##
    //##                            ##  
    //################################


// Crea una funcion que tome un valor de grados celcius y la pase a grados Fahrenheit.

//F = 32 + (9*C/5)
const f=45;
function ejercicio1(f){
    return ((f * 9/5)+32)
};
console.log(ejercicio1(f))