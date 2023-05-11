const lista=document.getElementById("lista")
const boton=document.getElementById("botonAdd")
const boton2=document.getElementById("botonBorrar")
const texto=document.getElementById("name")

boton.addEventListener("click",function(){
  lista.innerHTML += `<li>${texto.value}</li>`
    texto.value=''
})

boton2.addEventListener("click",function(){
  lista.innerHTML = ``
})