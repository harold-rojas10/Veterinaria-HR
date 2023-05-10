let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.querySelector("tbody");


let mascotas = [
  {
    nombreMascota: "Mystic",
    nombreDueno: "Diego",
    cedulaDueno: "80726341",
    edadMascota: "8",
    telefonoDueno: "3014969953",
    especialidad: "veterinaria conductual",
    medico: "jorge"

  },
  {
    nombreMascota: "Sasha",
    nombreDueno: "Xiomara",
    cedulaDueno: "1023453567",
    edadMascota: "10",
    telefonoDueno: "3014969953",
    especialidad: "Medicina interna",
    medico: "daniela"

  },
  {
    nombreMascota: "Mono",
    nombreDueno: "Xiomara",
    cedulaDueno: "80726341",
    edadMascota: "13",
    telefonoDueno: "3014969953",
    especialidad: "farmacologia consuctual",
    medico: "Diego"

  }
]



for (let i = 0; i < mascotas.length; i++) {
  let mascota = mascotas[i];
  let fila = cuerpoTabla.insertRow();
  let celdaNombreMascotas = fila.insertCell();
  let celdaNombreDueno = fila.insertCell();
  let celdaCedulaDueno = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueno = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();

  celdaNombreMascotas.textContent = mascota.nombreMascota;
  celdaNombreDueno.textContent = mascota.nombreDueno;
  celdaCedulaDueno.textContent = mascota.cedulaDueno;
  celdaEdadMascota.textContent = mascota.edadMascota
  celdaTelefonoDueno.textContent = mascota.telefonoDueno;
  celdaEspecialidad.textContent = mascota.especialidad;
  celdaMedico.textContent = mascota.medico;
}