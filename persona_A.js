/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más 
mujeres o ambos por igual. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:*/

import Cl_persona from ".Cl_persona.js"
import Cl_porcentaje from ".Cl_porcentaje.js"

let per1 = new Cl_persona("luisa","F");
let per2 = new Cl_persona("Ana","F");
let per3 = new Cl_persona("carmen","F");
let per4 = new Cl_persona("rosa","F");
let per5 = new Cl_persona("jose","M");
let per6 = new Cl_persona("maria","F");
let per7 = new Cl_persona("luz","F");
let per8 = new Cl_persona("rafael","M");
let per9 = new Cl_persona("liz","F");
let per10 = new Cl_persona("Marcos","M");
let per11= new Cl_persona("jose","M");
let per12 = new Cl_persona("leo","M");

let por = new Cl_porcentaje();
por. procesarpersonas(per2)
por. procesarpersonas(per3);
por. procesarpersonas(per4);
por. procesarpersonas(per5);
por. procesarpersonas(per6);
por. procesarpersonas(per7)
por. procesarpersonas(per8);
por. procesarpersonas(per9);
por. procesarpersonas(per10);
por. procesarpersonas(per11);
por. procesarpersonas(per12)


let salida = document.getElementById("salida");

salida.innerHTML =`
Porcentaje de mujeres procesadas: ${por.porcentajemujer()}<br>

${por.cantidad()}
`