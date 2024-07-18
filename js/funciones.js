const navegacion = document.querySelector(".nav-header");
const botonMenu = document.querySelector("#menu-abrir"); //seleccionando con ID es más facil
const botonCerrar = document.querySelector("#menu-cerrar");
const enlacesNav = document.querySelectorAll(".nav-header ul li a");
const logoDaniel = document.querySelector(".logo-header");

function toggleNavegacion(){ // Función que hace: desplegar la navegación, añadir o quitar oculto a ambos botones
    navegacion.classList.toggle("desplegado");
    botonMenu.classList.toggle('oculto');
    botonCerrar.classList.toggle('oculto');
}

function cerrarNavegacion(){ // Función que hace lo contrario que la anterior
    navegacion.classList.remove("desplegado");
    botonMenu.classList.remove('oculto');
    botonCerrar.classList.add('oculto');
}

botonMenu.addEventListener("click", toggleNavegacion); // cuando haces click en el icono hamburguesa, función toggleNavegacion
botonCerrar.addEventListener("click", toggleNavegacion); // cuando haces click en el icono X, función toggleNavegacion

enlacesNav.forEach(enlace => {
    enlace.addEventListener("click", cerrarNavegacion);
}); //cuando le das click a un enlace se cierra la navegacion con la funcion cerrarNavegacion

logoDaniel.addEventListener("click", cerrarNavegacion); //cuando le das click al logo se cierra la navegacion con la funcion cerrarNavegacion

// ---------------------------------------------------- de aquí para arriba JS necesario para el menú desplegable de movil

document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll("section"); //seleccionamos cada seccion

    function resaltarSeccion() { //funcion que invocamos para resaltar la seccion al pasar encima
        let index = secciones.length;

        while (--index && window.scrollY + 50 < secciones[index].offsetTop) {} 

        enlacesNav.forEach((link) => link.classList.remove('seccion-activa'));
        enlacesNav[index].classList.add('seccion-activa');
    }

    resaltarSeccion();
    window.addEventListener('scroll', resaltarSeccion);
});


// ---------------------------------------------------- de aquí para arriba JS necesario para que se indique la sección actual en el header

const miniaturasGaleria = document.querySelectorAll(".galeria-portfolio a")
const modal = document.querySelector(".modal-galeria-portfolio");
const imagenModal = document.querySelector(".modal-galeria-portfolio-imagen");
const botonesModal = document.querySelectorAll(".modal-galeria-portfolio button")
let indiceImagen = 0;

miniaturasGaleria.forEach((miniatura,i) => { //mostrar la imagen correcta al hacer click
    miniatura.addEventListener("click", evento => {
        evento.preventDefault();
        indiceImagen = i;
        imagenModal.setAttribute("src",miniatura.getAttribute("href"));
        modal.classList.add("visible");
    });
});

modal.addEventListener("click", () => { //salir de la imagen cuando haces click fuera
    modal.classList.remove("visible");
});

botonesModal.forEach((flecha,i) => { //pasar con las flechitas
    flecha.addEventListener("click", evento =>{
        evento.stopPropagation();
        if(i == 0){ //atrás
            indiceImagen = indiceImagen > 0 ? indiceImagen - 1 : miniaturasGaleria.length - 1;
        }else{ //adelante
            indiceImagen = indiceImagen < miniaturasGaleria.length - 1 ? indiceImagen + 1 : 0;
        }
        imagenModal.setAttribute("src",miniaturasGaleria[indiceImagen].getAttribute("href"));
    });
});