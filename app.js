let nuMeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


let parrafo = document.querySelector('p')
parrafo.innerHTML = 'Indica un número del 1 al 10'

function asignarTextoElemento (elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (nuMeroSecreto)
    console.log (intentos);

    if (numeroDeUsuario == nuMeroSecreto) {
        asignarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute ('disabled')
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > nuMeroSecreto) {
            asignarTextoElemento ('p' , 'El numero secreto es menor');
        } else {
            asignarTextoElemento ('p' , 'Elnumero secreo es mayor');
        }
        intentos++;
       limpiarCaja ();
    } 
    
    return;
    }

    function limpiarCaja () {

      document.querySelector('#valorUsuario').value ='';
      return;
    }


    function generarNumeroSecreto() {
       let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
            console.log(numeroGenerado);
            console.log(listaNumerosSorteados);

            //Si ya sorteamos todos los numeros 
            if(listaNumerosSorteados.length == numeroMaximo) {
                asignarTextoElemento ('p','Ya se sortearon todos los números posibles');

             } else {
       //Si el número generado esta incluido en la lista 
       if (listaNumerosSorteados.includes (numeroGenerado)){
        return generarNumeroSecreto ();

        
       }     else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
       }  
    }
    }

    function condicionesIniciales(){
        asignarTextoElemento('h1' , 'Juego del número secreto!!');
        asignarTextoElemento('p' , `Indica un número del 1 al ${numeroMaximo}, por favor ;`);
        nuMeroSecreto = generarNumeroSecreto();
        intentos = 1;
    
    }


    function reiniciarJuego() {

        //limpiar caja
        limpiarCaja();
        //Indicar mensaje de intervalos de números
        //Generar el número aleatorio      
        //inicializar el número de intentos
        condicionesIniciales();
        //Deshabilitar el boton de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled','true');
       
    }

    console.log(nuMeroSecreto);

    condicionesIniciales();

     



  
