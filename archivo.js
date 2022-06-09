const nombre = document.getElementById("name");
const emailAdress = document.getElementById("floatingInputAddress");
const inputPassword = document.getElementById("floatingPassword");
const button = document.getElementById("button");
const container = document.getElementById("container")

const nombreError= document.getElementById("nameError")
const emailError= document.getElementById("emailError")
const passwordError= document.getElementById("errorPassword")


button.addEventListener("click",(e)=>{
    event.preventDefault();
    console.log(e)
    notificacion()
    validar(nombre.value ,nombre,nombreError)
    validar(inputPassword.value ,inputPassword ,passwordError)
    validar(emailAdress.value ,emailAdress,emailError)

})

function validar(valueInput,divInput,divError){
    if(valueInput.length == 0){
         error (divInput,divError);
         notificacionError(divInput,divError)
    }else{
       error2(divInput,divError);
    }
}



function error (divInput,divError){
   container.style.border = "1px solid red"
   divInput.style.border ="1px solid red";
   divError.innerHTML=`<img src="./img/error.png" alt="" class="icono-error"> <p>Ingrese algun dato!</p>`

}


function error2 (divInput,divError){
    container.style.border = "1px solid green"
    divInput.style.border = "1px solid green"
    divError.innerHTML=`<img src="img/marca-de-verificacion.png" alt="" class="icono-Correcto">
    `
}


function notificacion(){
    Swal.fire('Usuario registrado')
}


function notificacionError(){
    Swal.fire('Usuario No registrado')
}