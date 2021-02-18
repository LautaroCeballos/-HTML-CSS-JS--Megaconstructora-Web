//ScrollReveal
var srOptions = {
    delay: 1000,
    useDelay: 'onload'
};

var srListsOptions = {
    interval: 200
};


//Home
ScrollReveal().reveal('#home', { delay: 1000 });
//Servicio
ScrollReveal().reveal('.serv-descripcion div', srOptions);
ScrollReveal().reveal('.serv-label', srListsOptions);
//Compromiso
ScrollReveal().reveal('.compr-item', srListsOptions);
//Miembros
ScrollReveal().reveal('.inversores', srOptions);
ScrollReveal().reveal('.call-to-action', srOptions);
//Contacto
ScrollReveal().reveal('#contacto .txt-naranja', srOptions);
ScrollReveal().reveal('.buttons-contacto', srOptions);
ScrollReveal().reveal('.form-contacto form>*', srListsOptions);
ScrollReveal().reveal('.info-contacto', srOptions);



window.onload = function () {

    //Formulario de Contacto
    let contact_form = document.getElementById('contact-form');

    contact_form.addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;

        try {
            emailjs.sendForm('service_d1zrelh', 'mega_template', this);
            for (let i = 0; i < contact_form.children.length; i++) {
                if (contact_form.children[i].type != 'submit') {
                    contact_form.children[i].value = "";
                } else {
                    contact_form.children[i].classList.add('btn-cta-send');
                    contact_form.children[i].value = "¡Gracias!";
                }
            }
        } catch {
            contact_form.lastElementChild.classList.add('btn-cta-err');
            contact_form.lastElementChild.value = 'Error :(';
        }
    });

    //Newslestter
    let newslestter_form = document.getElementById('newslestter-form');
    newslestter_form.addEventListener('submit', function (e) {
        e.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;

        try {
            emailjs.sendForm('service_d1zrelh', 'mega_newslestter', this);
            newslestter_form.children[1].value = "";
            newslestter_form.children[2].classList.add('btn-cta-send');
            newslestter_form.children[2].value = "¡Bienvenido!";
        } catch {
            newslestter_form.children[2].classList.add('btn-cta-err');
            newslestter_form.children[2].value = "Error :(";
        }
    });
}

window.onscroll = function (e) {
    let sectionsId = ['home', 'servicios', 'compromiso', 'miembros', 'contacto']; //Ids de cada uno de los sections que componen la pagina
    let menuItems = document.getElementById('menu').getElementsByTagName('a'); //Lista de links A que componen el menu
    let headerHeight = document.getElementsByTagName("header")[0].offsetHeight; //Ancho del Header segun cada media query
    let sectionTop = 0;
    let sectionBottom = 0;

    let scrollDoc = document.documentElement.scrollTop; //Scroll en tiempo real del documento

    for (let i = 0; i < sectionsId.length; i++) {
        menuItems[i].classList.remove('active');
        sectionTop = document.getElementById(sectionsId[i]).offsetTop - headerHeight - 10; //Posicion inicial del Section
        sectionBottom = sectionTop + document.getElementById(sectionsId[i]).offsetHeight; //Posicion final del Section

        if (scrollDoc > sectionTop && scrollDoc < sectionBottom) {
            if (menuItems[i].hash == '#' + sectionsId[i]) { //Si la propiedad href del link a coincide con el id de la seccion donde estamos posicionados
                menuItems[i].classList.add('active'); //Aplicamos la clase .active
            }
        }
    }

    /*
        La funcion onscroll debe conocer todos los id de los sections que se exponen en el header,
        Tambien conoce todos los links del header y la propiedad css, Height de este.
        A medida de que la propiedad scrollDoc recorre el documento se evalua si scrollDoc esta contenida entre el comienzo
        y el final de cada section (delimitada con las propiedades sectionTop y sectionBottom).
        una vez que se reconoce donde esta posicionado el scroll, se busca el link coincidente en 'menuItems' y se le aplica la clase
        active. Al principo de cada bucle se eliminan todas las instancias de la clase css para limpiar el header
    */
}

//Header
function cambiarClase() {
    let siteNav = document.getElementById('menu');
    siteNav.classList.toggle('menu-open');

    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('hamburguesa-animation');
}

function headerGoTo(e) {
    let idSection = e.attributes.href.value; //Devuelve el Id completo hacia donde hay que desplazarse
    let section = idSection.substring(1, idSection.lenght); //Devuelve solo el id(sin #) del section donde se quiere desplazar
    let topSection = document.getElementById(section).offsetTop; //Posicion del section donde quiero llegar

    let headerHeight = document.getElementsByTagName("header")[0].offsetHeight; //Ancho del Header segun cada media query

    window.scrollTo({
        top: topSection - headerHeight,
        behavior: 'smooth'
    });
}

//Servicio

(function () {
    let indexInterval = 0;
    let itemsService = document.getElementsByName('s-slides');
    window.setInterval(() => {
        itemsService[indexInterval].checked = true;
        indexInterval++;
        if (indexInterval >= itemsService.length) {
            indexInterval = 0;
        }
    }, 5000);
})();

//Miembros
(function () {
    let indexInterval = 0;
    let itemsMiembros = document.getElementsByName('m-slides');
    window.setInterval(() => {
        itemsMiembros[indexInterval].checked = true;
        indexInterval++;
        if (indexInterval >= itemsMiembros.length) {
            indexInterval = 0;
        }
    }, 3000);
})();


//Contacto
function initMap() {
    var uluru = { lat: -31.425447, lng: -64.161493 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

//Footer
function helpMe(e) {
    let contact_form = document.getElementById('contact-form').children;
    headerGoTo(e);

    switch (e.text) {
        case "Quiero Invertir":
            contact_form[4].value = "¡Hola Mega Constructora! Estoy interesado en invertir en uno de sus proyectos. Espero su contacto. ¡Muchas Gracias!";
            break;
        case "Quiero Vivir":
            contact_form[4].value = "¡Hola Mega Constructora! Estoy buscando asesoramiento en viviendas. Espero su contacto. ¡Muchas Gracias!";
            break;
        case "Quiero brindar un Servicio":
            contact_form[4].value = "¡Hola Mega Constructora! Estoy interesado en ofrecerles un servicio. Espero su contacto. ¡Muchas Gracias!";
            break;
        case "Quiero Proveer":
            contact_form[4].value = "¡Hola Mega Constructora! Represento a una firma que provee materiales que podrian ser de su interes. Espero su contacto. ¡Gracias!";
            break;
        case "Quiero Trabajar":
            contact_form[4].value = "¡Hola Mega Constructora! Estoy interesado en trabajar con ustedes. Espero su contacto. ¡Gracias!";
            break;

    }

    contact_form[4].focus();

}



