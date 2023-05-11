let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody");

//clases
class Mascota {
  constructor(nombreMascota, nombreDueño, cedulaDueño, edadMascota, telefonoDueño, especialidad, medico) {
    this.nombreMascota = nombreMascota;
    this.nombreDueño = nombreDueño;
    this.cedulaDueño = cedulaDueño;
    this.edadMascota = edadMascota;
    this.telefonoDueño = telefonoDueño;
    this.especialidad = especialidad;
    this.medico = medico
  }
}
//objetos
let mascota1 = new Mascota("Luna", "Ana", "1234567", "5 años", "3105678946", "Veterinaria Conductual", "Jorge")
let mascota2 = new Mascota("Orion", "Ana", "1234567", "5 años", "3105678946", "Veterinaria Conductual", "Jorge")
let mascota3 = new Mascota("Mystic", "Ana", "1234567", "5 años", "3105678946", "Veterinaria Conductual", "Jorge")
let mascota4 = new Mascota("Maily", "Ana", "1234567", "5 años", "3105678946", "Veterinaria Conductual", "Jorge")

agregarFila(mascota1)
agregarFila(mascota2)
agregarFila(mascota3)
agregarFila(mascota4)

let mascota5 = new Mascota("Lilo", "Ana", "1234567", "5 años", "3105678946", "Veterinaria Conductual", "Jorge")
agregarFila(mascota5)


function agregarFila(mascota) {
  let fila = cuerpoTabla.insertRow();
  let celdaNombreMascota = fila.insertCell();
  let celdaNombreDueño = fila.insertCell();
  let celdaCedulaDueño = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueño = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();
  celdaNombreMascota.textContent = mascota.nombreMascota;
  celdaNombreDueño.textContent = mascota.nombreDueño;
  celdaCedulaDueño.textContent = mascota.cedulaDueño;
  celdaEdadMascota.textContent = mascota.edadMascota;
  celdaTelefonoDueño.textContent = mascota.telefonoDueño;
  celdaEspecialidad.textContent = mascota.especialidad;
  celdaMedico.textContent = mascota.medico;

}