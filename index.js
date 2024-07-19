// SECCION MENU RESPONSIVE

const nav = document.querySelector("#nav"); // declaramos una variable y llamamos a nuestro elemento de html con el id "#nav" . Asi con los demas elementos del menu

const abrir = document.querySelector("#abrirMenu");

const cerrar = document.querySelector("#cerrarMenu");

abrir.addEventListener("click", () => { //Declaramos una funcion, diciendo que cuando hacemos click en el boton se va agregar una clase que va hacer visible nuestro menu responsive
    nav.classList.add("visible");  
})

cerrar.addEventListener("click", () => { //Declaramos nuevamente otra funcion a el btn cerrar para que desaparezca y le quitamos la clase
    nav.classList.remove("visible"); 
})



// SECCION PREGUNTAS FRECUENTES
const faqs = document.querySelectorAll(".faq__container"); //Declaramos una variable (que no va a cambiar) y llamamos a nuestro elemento de html con la clase "".faq__container"
faqs.forEach((faq) => {
    faq.addEventListener("click", () => { //Declaramos una funcion, que al hacer click añada o elimine la clase "active" (gracias a Toggle)
        faq.classList.toggle("active");
    })
})



//() => {}


