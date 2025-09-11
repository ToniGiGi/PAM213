// Todos los archivos de java terminan en .js 

document.write("<h1>Hola Mundo");

//--------------------------------//

var namuser = 'ryan';
let lastname = 'ray'; // let se usa para variables que pueden cambiar
puntaje = 1000;


console.log(namuser);
console.log(lastname);
console.log(puntaje);

const PI = 3.14; // Constante se usa para valores que no cambian
PI = 100; // Error por que no se puede reasignar una constante

console.log(PI);

//--------------------------------//


console.log({"username": 'ryan', 'score': 1000});


//--------------------------------//

// Tipos de datos
"hola mundo"; // String
'hola mundo'; // String
`hola mundo`; // String (template literal)

123; // Number

true; // Boolean
false; // Boolean
null; // Null
undefined; // Undefined

//array
[1, 2, 3];
["Joe", "Ryan", "John"];
[true, false, true];

//objeto
{ 
    "nombre": 'Joe',
    "edad": 30, 
    "casado": true
    "Amigos": ["Ryan", "John"] 
};

//--------------------------------//

let num_1 = 10;
let num_2 = 30;

let res1 = num_1 + num_2;
let res2 = num_1 - num_2;
let res3 = num_1 / num_2;
let res4 = num_1 * num_2;
let res5 = num_1 < num_2;
console.log([res1,res2,res3,res4,res5])

let password = "66666";
let imput = "98765";

let res6 = password == imput; // Es condicional con if else y switch
if (res6==true) {
    console.log("Acceso concedido");
}
else if (password == "66666"){
    console.log("Acceso especial");
}

//-------------------------------------//

//switch -- Otro metodo para hacer condicionales con casos 

switch(password) {
    case "12345":
        console.log("Acceso concedido");
        break;
    case "66666":
        console.log("Acceso especial");
        break;
    default:
        console.log("Acceso denegado");
        break;
}           

//-------------------------------------//

// Funciones sirven para reutilizar codigos, reciben parametos y retornan valores

let nombre 
function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar('Adela');
saludar('Ryan');

function sumar(num1, num2) {
    res7 = num1 +num2;
    document.write("<h2>" + res7 + "</h2>");
    return res7;
    
}


