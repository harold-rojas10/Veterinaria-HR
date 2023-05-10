/*let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody")[0];

//Arreglos
let nombreMascotas
let nombreDueños
let cedulaDueño
let edadMascota
let telefonoDueño
let especialidad
let medico

//...........................................*/

let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody");

//Arreglos
let nombreMascotas = ["Luna", "Orion", "Maily", "Mystic"]
let nombreDueño = ["Ana", "Jorge", "Kevin", "8 años"]
let cedulaDueño = ["1234567", "6789015", "5678954", "56723982"]
let edadMascota = ["5 años", "2 meses", "2 años", "8 años"]
let telefonoDueño = ["3105678946", "12345678909", "5678902567", "5678952567"]
let especialidad = ["Veterinaria Conductual", "Medicina interna", "Dermatología veterinaria", "Farmacología veterinaria"]
let medico = ["Jorge", "Daniela", "Andres", "Jeison"]


for (let i = 0; i < nombreMascotas.length; i++) {
  let fila = cuerpoTabla.insertRow(); //inserta un nuevo tr en la tabla
  let celdaNombreMascota = fila.insertCell();//inserta un nuevo th dentro del tr
  let celdaNombreDueño = fila.insertCell();
  let celdaCedulaDueño = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueño = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();

  celdaNombreMascota.textContent = nombreMascotas[i];
  celdaNombreDueño.textContent = nombreDueño[i];
  celdaCedulaDueño.textContent = cedulaDueño[i];
  celdaEdadMascota.textContent = edadMascota[i];
  celdaTelefonoDueño.textContent = telefonoDueño[i];
  celdaEspecialidad.textContent = especialidad[i];
  celdaMedico.textContent = medico[i]

}