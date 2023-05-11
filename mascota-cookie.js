let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody")

const jsonDatos = JSON.parse(obtenerCookie("mascotas"))

for (let i = 0; i < jsonDatos.length; i++) {
  let registro = jsonDatos[i]
  agregarFila(registro)
}

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

function obtenerCookie(nombre) {
  const cookies = document.cookie.split("; ")
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === nombre) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return "";
}