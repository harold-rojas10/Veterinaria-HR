let tablaMedico = document.getElementById("tabla-medicos");
let cuerpoTabla = tablaMedico.querySelector("tbody");

const jsonDatos = JSON.parse(obtenerCookie("medico"))
const mascotasCookie = JSON.parse(obtenerCookie('mascotas') || "[]");

for (let i = 0; i < jsonDatos.length; i++) {
  let registro = jsonDatos[i]
  agregarFila(registro)
}

function agregarFila(medico) {
  let fila = cuerpoTabla.insertRow(); //inserta un nuevo tr en la tabla
  let celdanombreMed = fila.insertCell();//inserta un nuevo th dentro del tr
  let celdaapellidoMed = fila.insertCell();
  let celdaCedula = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaConsultorio = fila.insertCell();
  let celdaCorreo = fila.insertCell();
  let celdaTelefono = fila.insertCell();
  //let celdaPasientes = fila.insertCell();

  celdanombreMed.textContent = medico.nombreMedico
  celdaapellidoMed.textContent = medico.apellidoMedico;
  celdaCedula.textContent = medico.cedulaMedico;
  celdaEspecialidad.textContent = medico.especialidad;
  celdaConsultorio.textContent = medico.consultorio;
  celdaCorreo.textContent = medico.correo;
  celdaTelefono.textContent = medico.telefono
  //celdaPasientes.textContent = medico.pacientes

  let mascotasEncontradas = mascotasCookie.filter(mascota => medico.especialidad === mascota.especialidad);
  if (mascotasEncontradas.length > 0) {
    const medicoMascota = fila.insertCell();
    medicoMascota.innerHTML = `<ul id="pacientes"></ul>`
    const pacientes = medicoMascota.querySelector("#pacientes")
    mascotasEncontradas.forEach(mascota => {
      pacientes.innerHTML += `<li>${mascota.nombreMascota}</li>`;
    });
  } else {
    const medicoMascota = fila.insertCell();
    medicoMascota.textContent = "Sin pacientes";
  }
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