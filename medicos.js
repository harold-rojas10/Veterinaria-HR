let tablaMedico = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedico.querySelector("tbody");

//Arreglos
let nombreMed = ["Luna", "Orion", "Maily", "Mystic"]
let apellidoMed = ["Ana", "Jorge", "Kevin", "8 años"]
let cedula = ["1234567", "6789015", "5678954", "56723982"]
let especialidad = ["5 años", "2 meses", "2 años", "8 años"]
let consultorio = ["3105678946", "12345678909", "5678902567", "5678952567"]
let correo = ["Veterinaria Conductual", "Medicina interna", "Dermatología veterinaria", "Farmacología veterinaria"]
let pacientes = ["Jorge", "Daniela", "Andres", "Jeison"]


for (let i = 0; i < nombreMed.length; i++) {
  let fila = cuerpoTabla.insertRow(); //inserta un nuevo tr en la tabla
  let celdanombreMed = fila.insertCell();//inserta un nuevo th dentro del tr
  let celdaapellidoMed = fila.insertCell();
  let celdaCedula = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaConsultorio = fila.insertCell();
  let celdaCorreo = fila.insertCell();
  let celdaPasientes = fila.insertCell();

  celdanombreMed.textContent = nombreMed[i];
  celdaapellidoMed.textContent = apellidoMed[i];
  celdaCedula.textContent = cedula[i];
  celdaEspecialidad.textContent = especialidad[i];
  celdaConsultorio.textContent = consultorio[i];
  celdaCorreo.textContent = correo[i];
  celdaPasientes.textContent = pacientes[i]
}