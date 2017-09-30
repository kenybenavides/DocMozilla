/*
1.prueba
var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello world!';


*/


/*
2.Tipos de variables
var nombreDeLaVariable = 'Bob';

nombreDeLaVariable =  'steve';

var miVariable = 10;

var miVariable = true;
var miVariable = [1,'Bob','Steve',10];
var miVariable = document.querySelector('h1');


*/
/*
3.Concatenar tipos de datos 
var concatenar = 6 + 9;
var concatenar2 ="Hola " + "mundo!"; 
*/
/*
4.Operaciones Basicas

var operacion1 = 9-3;
var operacion2 = 8*2;
var operacion3 = 9/3;
var operacion4 = 8+8;

*/
/*
5. Operador de Asignacion

var miVariable = 'Bob';
*/
/*
6.Operador identidad e igualdad 
var miVariable = 3;
miVariable === 4;

*/
/*
7.comparación devuelve false porque lo hemos negado:
var miVariable = 3;
!miVariable === 3;
*/
/*
8.Aquí estamos comprobando "es miVariable NO igual a 3". Esto devuelve false, porque ES igual a 3.
var miVariable = 3;
miVariable !== 3;

*/
/*

9.Condicionales

var helado = 'chocolate';
if (helado === 'chocolate') {
  alert('¡Si, amo el helado de chocolate!');    
} else {
  alert('Awwww, pero mi favorito es el de chocolate...');    
}

*/
/*
10.funciones
var nombreDeLaVariable = document.querySelector('h1');

alert('Hola!');

function multiplica(num1,num2) {
  var resultado = num1 * num2;
  return resultado;
}

function resta(num1,num2) {
  var resultado = num1 - num2;
  return resultado;
}

function suma(num1,num2) {
  var resultado = num1 + num2;
  return resultado;
}


console.log(multiplica(4,7));
console.log(resta(20,15));
console.log(suma(0.5,3));

*/

/*

11.Eventos

document.querySelector('html').onclick = function() {
    alert('Ouch! Deja de pincharme!');
}

document.querySelector('html').onclick = function(){};

//es equivalente

var miHTML = document.querySelector('html');
miHTML.onclick = function(){};
*/
/*
12.Añadiendo un cambiador de imagen
var miImage = document.querySelector('img');

miImage.onclick = function(){

    var miSrc = miImage.getAttribute('src');

    if (miSrc === 'images/fondo-bienvenidos.jpg') {

      miImage.setAttribute('src','images/fondo-bienvenidos.jpg');
    } else {
      miImage.setAttribute('src', 'images/fondo-bienvenidos.jpg');
    }
}

*/
/*
12.Añadiendo un mensaje de bienvenida personalizado

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}

*/



ar myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
