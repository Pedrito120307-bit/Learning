document.getElementById("create-range").addEventListener("click", () => {
    document.getElementById("range-input").innerHTML = "";
    fields();
})

function fields() {
    const numeroUno = document.createElement("input");
    const numeroDos = document.createElement("input");
    const generador = document.createElement("button");

    numeroUno.placeholder = "Ingrese el primer numero";
    numeroUno.id = "number1";
    numeroUno.type = "number";
    document.getElementById("range-input").appendChild(numeroUno);
    
    document.getElementById("range-input").appendChild(document.createElement("br"));

    numeroDos.placeholder = "Ingrese el segundo numero";
    numeroDos.id = "number2";
    numeroDos.type = "number";
    document.getElementById("range-input").appendChild(numeroDos);

    document.getElementById("range-input").appendChild(document.createElement("br"));

    generador.textContent = "Generar Rango";
    generador.id = "range";
    document.getElementById("range-input").appendChild(generador);

    document.getElementById("range").addEventListener("click", () => {
    
    const a = Number(document.getElementById("number1").value);
    const b = Number(document.getElementById("number2").value);

    evaluacion(a, b)});
}

function evaluacion(n1, n2) {
    document.getElementById("range-output").innerHTML = "";
    const numeroMostrado = document.createElement("p");

    if(n1 === n2){
        numeroMostrado.textContent = "Los valores no pueden ser iguales.";
        document.getElementById("range-output").appendChild(numeroMostrado);
        console.log("Valores identicos.");
       if(n1 == 0 && n2 == 0){
            numeroMostrado.textContent = "Los valores no pueden ser cero.";
            document.getElementById("range-output").appendChild(numeroMostrado);
            console.log("Valores cero.");
            }
    }else if (n1 > n2){
        numeroMostrado.textContent = "El primer valor debe ser menor al segundo valor.";
        document.getElementById("range-output").appendChild(numeroMostrado);
        console.log("El primer valor es mayor al segundo valor.");
    }else if (valueAsNumber(n1) && valueAsNumber(n2)){
        numeroMostrado.textContent = "Por favor, ingrese valores numéricos válidos.";
        document.getElementById("range-output").appendChild(numeroMostrado);
        console.log("Valores no numericos.");
    }else{generarRango(n1, n2)}
}

const numeros = [];

function generarRango(n1, n2) {
    const numeroObtenido = (Math.floor(Math.random() * (n2 - n1 + 1)) + n1);
    
    if(!(numeros.includes(numeroObtenido))){
        numeros.push(numeroObtenido);
    }
    
    const ultimo = numeros[numeros.length-1];

    const valoresMostrados = document.createElement("p");
    valoresMostrados.textContent = "El numero obtenido entre " + n1 + " y " + n2 + " es: " + ultimo;
    document.getElementById("range-output").appendChild(valoresMostrados);

   console.log(numeros);
}
