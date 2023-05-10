let tablaMedico = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedico.querySelector("tbody");

//Arreglos
let nombreMed = ["Camilo", "Sofia", "Mario", "Andres"]
let apellidoMed = ["Rojas", "Pineda", "Diaz", "llanos"]
let cedula = ["1234567", "6789015", "5678954", "56723982"]
let especialidad = ["Veterinaria Conductual", "Medicina interna", "Dermatología veterinaria", "Farmacología veterinaria"]
let consultorio = ["101", "102", "201", "202"]
let correo = ["CR@Veterinaria", "CR@Veterinaria", "CR@Veterinaria", "CR@Veterinaria"]
let pacientes = ["Luna", "Orion", "Maily", "Mystic"]


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