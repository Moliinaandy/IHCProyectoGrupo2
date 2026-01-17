const listaOfertas = [{
    id: "1",
    nombre: "Tour Ingenio Xtremo",
    imagen: "recursos/oferta-tour-ingenio-xtremo.png",
    ubicacion: "Ingenio, Junín",
    calificacion: 4.8,
    duracion: "Half Day (Medio día)",
    precioOferta: "139.00",
    precioReal: "159.00",
    categoria: "aventurero",
    seccion: "preferencia",
    video: "recursos/video_ingenio.mp4",
    descripcion: "El Ingenio Xtremo es un emocionante tour de aventura ubicado en Ingenio, Junín. Este tour está diseñado para aquellos que buscan experiencias llenas de adrenalina en medio de impresionantes paisajes naturales. Durante el recorrido, los visitantes pueden disfrutar de actividades como tirolesa, rappel y escalada, todo bajo la supervisión de guías expertos. Además, el entorno natural ofrece vistas panorámicas y la oportunidad de observar la flora y fauna local. Este tour es ideal para quienes desean desconectarse de la rutina y vivir una jornada llena de emoción y naturaleza.",
    atractivos: ["Atracción Aventura: Disfruta de tirolesa, rappel y otras actividades extremas.",
        "Entorno Natural: Maravíllate con los paisajes naturales y la fauna local.",
        "Experiencia Única: Ideal para quienes buscan una experiencia llena de emoción y desafíos."],
    itinerario: [{
        itinerarioHora: "7:30 AM - Punto de Encuentro",
        itinerarioActividad: ["Reunión en el punto de encuentro designado en Ingenio.", "Bienvenida y presentación del guía turístico."]
    }, {
        itinerarioHora: "8:00 AM - Inicio de Actividades",
        itinerarioActividad: ["Comienza la aventura con tirolesa y rappel."]
    }, {
        itinerarioHora: "10:30 AM - Caminata Guiada",
        itinerarioActividad: ["Caminata guiada por los alrededores de Ingenio."]
    }, {
        itinerarioHora: "1:00 PM - Almuerzo (no incluido)",
        itinerarioActividad: ["Almuerzo en un restaurante local con opciones de comida típica (opcional y por cuenta propia)."]
    }, {
        itinerarioHora: "2:30 PM - Actividades Extremo",
        itinerarioActividad: ["Más actividades de aventura como escalada y puentes colgantes."]
    }, {
        itinerarioHora: "5:00 PM - Retorno",
        itinerarioActividad: ["Retorno al punto de partida en Ingenio."]
    }]
},
{
    id: "2",
    nombre: "Tour Huancayo",
    imagen: "recursos/oferta-tour-huancayo.png",
    ubicacion: "Sierra Central, Junín",
    calificacion: 4.9,
    duracion: "Half Day (Medio día)",
    precioOferta: "79.00",
    precioReal: "99.00",
    categoria: "cultural",
    seccion: "preferencia",
    video: "recursos/video_huancayo.mp4",
    descripcion: "Explora la riqueza cultural de Huancayo en este tour guiado por la Sierra Central de Junín. Durante este recorrido, tendrás la oportunidad de visitar sitios históricos y culturales significativos, aprender sobre las costumbres y tradiciones locales, y descubrir el trabajo artesanal típico de la región. Este tour es perfecto para aquellos interesados en la historia y la cultura, ofreciendo una inmersión profunda en la vida y el patrimonio de Huancayo. Los visitantes también tendrán la oportunidad de interactuar con la comunidad local y comprar artesanías únicas como recuerdos.",
    atractivos: ["Sitios Históricos: Visita lugares históricos y culturales en Huancayo.",
        "Artesanía Local: Descubre el trabajo artesanal típico de la región.",
        "Cultura y Tradición: Aprende sobre las costumbres y tradiciones locales."],
    itinerario: [{
        itinerarioHora: "7:30 AM - Punto de Encuentro",
        itinerarioActividad: ["Reunión en el punto de encuentro designado en Huancayo.", "Bienvenida y presentación del guía turístico."]
    }, {
        itinerarioHora: "8:00 AM - Visita a Museos",
        itinerarioActividad: ["Visita a museos locales para conocer la historia de la región."]
    }, {
        itinerarioHora: "10:30 AM - Mercado Artesanal",
        itinerarioActividad: ["Recorrido por el mercado artesanal para comprar souvenirs."]
    }, {
        itinerarioHora: "1:00 PM - Almuerzo (no incluido)",
        itinerarioActividad: ["Almuerzo en un restaurante local con platos típicos (opcional y por cuenta propia)."]
    }, {
        itinerarioHora: "2:30 PM - Tour por el Centro Histórico",
        itinerarioActividad: ["Recorrido guiado por el centro histórico de Huancayo."]
    }, {
        itinerarioHora: "5:00 PM - Retorno",
        itinerarioActividad: ["Retorno al punto de partida en Huancayo."]
    }]
},
{
    id: "3",
    nombre: "Tour Nevado Huaytapallana",
    imagen: "recursos/oferta-tour-nevado-huaytapallana.png",
    ubicacion: "Tarma, Junín",
    calificacion: 4.7,
    duracion: "Full Day (1 día)",
    precioOferta: "69.00",
    precioReal: "89.00",
    categoria: "aventurero",
    seccion: "preferencia",
    video: "recursos/video_nevado.mp4",
    descripcion: "Aventúrate en el Nevado Huaytapallana en Tarma, Junín. Este tour ofrece una experiencia única de senderismo en uno de los paisajes más espectaculares de la región. Durante el recorrido, los visitantes podrán disfrutar de vistas panorámicas impresionantes, explorar rutas de senderismo desafiantes y experimentar la tranquilidad de la naturaleza virgen. El Nevado Huaytapallana es perfecto para aquellos que aman la aventura y la exploración, proporcionando una oportunidad para desconectarse de la vida urbana y conectarse con la naturaleza en su estado más puro.",
    atractivos: ["Senderismo: Caminata guiada por las rutas del Nevado Huaytapallana.",
        "Paisajes Impresionantes: Disfruta de vistas panorámicas y naturaleza virgen.",
        "Experiencia en Altura: Vive la emoción de explorar uno de los nevados más bellos de Junín."],
    itinerario: [{
        itinerarioHora: "7:30 AM - Punto de Encuentro",
        itinerarioActividad: ["Reunión en el punto de encuentro designado en Tarma.", "Bienvenida y presentación del guía turístico."]
    }, {
        itinerarioHora: "8:00 AM - Inicio de la Caminata",
        itinerarioActividad: ["Comienza la caminata hacia el Nevado Huaytapallana."]
    }, {
        itinerarioHora: "10:30 AM - Pausa y Vista Panorámica",
        itinerarioActividad: ["Pausa para descansar y disfrutar de las vistas panorámicas."]
    }, {
        itinerarioHora: "1:00 PM - Almuerzo (no incluido)",
        itinerarioActividad: ["Almuerzo tipo picnic en la naturaleza (opcional y por cuenta propia)."]
    }, {
        itinerarioHora: "2:30 PM - Continuación de la Caminata",
        itinerarioActividad: ["Continúa la caminata por las rutas del nevado."]
    }, {
        itinerarioHora: "5:00 PM - Retorno",
        itinerarioActividad: ["Retorno al punto de partida en Tarma."]
    }]
},
{
    id: "4",
    nombre: "Tour Laguna de Paca",
    imagen: "recursos/oferta-tour-laguna-de-paca.png",
    ubicacion: "Huancayo, Junín",
    calificacion: 5,
    duracion: "Full Day (1 día)",
    precioOferta: "69.00",
    precioReal: "89.00",
    categoria: "aventurero",
    seccion: "popular",
    video: "recursos/video_lagunapaca.mp4",
    descripcion: "La Laguna de Paca es uno de los destinos más emblemáticos de la región Junín, ubicada a solo 30 minutos de la ciudad de Huancayo. Con una altitud de 3,418 metros sobre el nivel del mar y una extensión de aproximadamente 21 kilómetros cuadrados, esta laguna ofrece un paisaje impresionante rodeado de montañas y campos verdes.",
    atractivos: ["Paseos en Bote: Los visitantes pueden disfrutar de paseos en bote por la laguna, admirando la belleza del entorno y observando la fauna local, incluyendo diversasespecies de aves.",
        "Leyendas y Mitos: La laguna es famosa por las leyendas que la rodean, como la historia de la princesa Paca, que según la tradición local, dio origen al nombre de la laguna.",
        "Paisajes Naturales: El entorno natural de la laguna es ideal para los amantes de la naturaleza y la fotografía, con vistas panorámicas y una atmósfera tranquila y relajante."
    ],
    itinerario: [{
        itinerarioHora: "7:30 AM - Punto de Encuentro",
        itinerarioActividad: ["Reunión en el punto de encuentro designado en Huancayo.", "Bienvenida y presentación del guía turístico."]
    }, {
        itinerarioHora: "8:00 AM - Salida hacia la Laguna de Paca",
        itinerarioActividad: ["Partida en transporte turístico hacia la Laguna de Paca."]
    }, {
        itinerarioHora: "8:30 AM - Visita a la Laguna de Paca",
        itinerarioActividad: ["Llegada a la Laguna de Paca.", "Recorrido guiado por los alrededores de la laguna.", "Paseo en bote opcional (costo adicional)."]
    }, {
        itinerarioHora: "10:30 AM - Visita a la Iglesia de Jauja",
        itinerarioActividad: ["Traslado a Jauja para conocer su histórica iglesia."]
    }, {
        itinerarioHora: "11:30 AM - Recorrido por el Centro Histórico de Jauja",
        itinerarioActividad: ["Caminata por el centro histórico de Jauja.", "Tiempo libre para tomar fotografías y explorar la zona."]
    }, {
        itinerarioHora: "1:00 PM - Almuerzo (no incluido)",
        itinerarioActividad: ["Almuerzo en un restaurante local con platos típicos de la región (opcional y por cuenta propia)."]
    }, {
        itinerarioHora: "2:30 PM - Visita a la Plaza de Armas de Jauja",
        itinerarioActividad: ["Tiempo para disfrutar de la plaza, conocer su historia y tomar fotografías."]
    }, {
        itinerarioHora: "3:30 PM - Visita a los Baños Termales de Paca",
        itinerarioActividad: ["Relájate en las aguas termales de Paca (entrada incluida)."]
    }, {
        itinerarioHora: "6:00 PM - Retorno a Huancayo",
        itinerarioActividad: ["Salida hacia Huancayo.", "Breve parada en el camino para disfrutar de las vistas panorámicas."]
    }, {
        itinerarioHora: "7:00 PM - Llegada a Huancayo",
        itinerarioActividad: ["Fin del tour en el punto de partida inicial."]
    }
    ]
},
{
    id: "5",
    nombre: "Tour Valle Del Perene",
    imagen: "recursos/oferta-tour-valle-del-perene.png",
    ubicacion: "Chanchamayo, Junín",
    calificacion: 4.6,
    duracion: "Full Day (1 día)",
    precioOferta: "169.00",
    precioReal: "189.00",
    categoria: "cultural",
    seccion: "popular",
    video: "recursos/video_valledelperene.mp4",
    descripcion: "Descubre el Valle del Perene en Chanchamayo, Junín. Este tour cultural te llevará a través de un viaje lleno de historia y belleza natural. Durante el recorrido, visitarás comunidades indígenas, aprenderás sobre su cultura y tradiciones, y explorarás las hermosas cascadas y paisajes del valle. Este tour es ideal para aquellos interesados en la cultura y la naturaleza, ofreciendo una experiencia enriquecedora y educativa. Además, tendrás la oportunidad de participar en actividades culturales y disfrutar de la hospitalidad de las comunidades locales.",
    atractivos: ["Cultura Indígena: Conoce la historia y cultura de las comunidades locales.",
        "Bellezas Naturales: Explora las cascadas y paisajes del valle.",
        "Experiencias Culturales: Participa en actividades y rituales tradicionales."],
    itinerario: [{
        itinerarioHora: "7:30 AM - Punto de Encuentro",
        itinerarioActividad: ["Reunión en el punto de encuentro designado en Chanchamayo.", "Bienvenida y presentación del guía turístico."]
    }, {
        itinerarioHora: "8:00 AM - Visita a Comunidades Indígenas",
        itinerarioActividad: ["Visita a las comunidades indígenas y aprendizaje de su cultura."]
    }, {
        itinerarioHora: "10:30 AM - Exploración de Cascadas",
        itinerarioActividad: ["Exploración y disfrute de las cascadas del Valle del Perene."]
    }, {
        itinerarioHora: "1:00 PM - Almuerzo (no incluido)",
        itinerarioActividad: ["Almuerzo en un restaurante local con comida típica (opcional y por cuenta propia)."]
    }, {
        itinerarioHora: "2:30 PM - Actividades Culturales",
        itinerarioActividad: ["Participación en actividades y rituales culturales."]
    }, {
        itinerarioHora: "5:00 PM - Retorno",
        itinerarioActividad: ["Retorno al punto de partida en Chanchamayo."]
    }]
},
{
    id: "6",
    nombre: "Tour Artesanal (Huancayo + Concepción)",
    imagen: "recursos/oferta-tour-artesanal.png",
    ubicacion: "Concepción, Junín",
    calificacion: 4.7,
    duracion: "Full Day (1 día)",
    precioOferta: "89.00",
    precioReal: "109.00",
    categoria: "artesanal",
    seccion: "popular",
    video: "recursos/video_artesanal.mp4",
    descripcion: "Embárcate en un viaje a través de la rica tradición artesanal de Huancayo y Concepción en Junín. Este tour te lleva a visitar los talleres de los artesanos locales, donde podrás observar de cerca sus técnicas y procesos de trabajo. Aprende sobre la historia de la artesanía en la región y adquiere piezas únicas como recuerdos. Este tour es ideal para aquellos interesados en la cultura, el arte y la historia, ofreciendo una experiencia educativa y enriquecedora. Además, tendrás la oportunidad de interactuar con los artesanos y comprender mejor el valor de sus trabajos.",
    atractivos: ["Artesanía Local: Visita talleres de artesanía y compra productos locales.",
        "Cultura y Tradición: Aprende sobre las técnicas tradicionales de artesanía.",
        "Interacción con Artesanos: Conoce y conversa con los artesanos locales."],
    itinerario: [{
        itinerarioHora: "7:30 AM - Punto de Encuentro",
        itinerarioActividad: ["Reunión en el punto de encuentro designado en Concepción.", "Bienvenida y presentación del guía turístico."]
    }, {
        itinerarioHora: "8:00 AM - Visita a Talleres Artesanales",
        itinerarioActividad: ["Visita a talleres de artesanía en Huancayo y Concepción."]
    }, {
        itinerarioHora: "10:30 AM - Demostración de Técnicas",
        itinerarioActividad: ["Demostración de técnicas de artesanía por parte de los artesanos."]
    }, {
        itinerarioHora: "1:00 PM - Almuerzo (no incluido)",
        itinerarioActividad: ["Almuerzo en un restaurante local con comida típica (opcional y por cuenta propia)."]
    }, {
        itinerarioHora: "2:30 PM - Compra de Artesanías",
        itinerarioActividad: ["Tiempo libre para comprar artesanías y souvenirs."]
    }, {
        itinerarioHora: "5:00 PM - Retorno",
        itinerarioActividad: ["Retorno al punto de partida en Concepción."]
    }]
}
];

function renderizarOfertas(listado, categoriaOfertas) {
    const ofertas = document.querySelector(categoriaOfertas);

    ofertas.innerHTML = "";
    const fila = document.createElement('div');
    fila.classList.add('row');
    listado.forEach(oferta => {

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        tarjeta.classList.add('tarjeta-oferta');
        tarjeta.classList.add('col-lg-3');
        tarjeta.classList.add('col-md-5');
        tarjeta.classList.add('col-8');
        tarjeta.innerHTML += `
            <img class="card-img-top" src="${oferta.imagen}" alt="oferta de ${oferta.nombre}">
            <div class="card-body">
                <h5 class="card-title">${oferta.nombre}</h5>
                <div class="ubicacion">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>${oferta.ubicacion}</p>
                </div>
                <div class="clasificacion">
                    ${Array.from({ length: 5 }, (_, index) => `<i class="fa-solid fa-star${index < oferta.calificacion ? " pintar" : ""}"></i>`).join('')}
                </div>
                <div class="detalle-oferta">
                    <p class="duracion">${oferta.duracion}</p>
                    <div class="precios">
                        <p class="precio-oferta">${oferta.precioOferta}</p>
                        <p class="precio-real">${oferta.precioReal}</p>
                    </div>
                </div>
                <button onclick="mostrarActividadSeleccionada(${oferta.id});" class="btn btn-primary">Haz tu reserva</button>
            </div>
        `;

        fila.appendChild(tarjeta);
        if (oferta.id % 3 == 0) {
            ofertas.appendChild(fila);
        }
    });
}

function mostrarActividadSeleccionada(id) {
    const ofertaSeleccionada = listaOfertas.find(oferta => oferta.id == id);
    const detalleOferta = document.querySelector(".detalle-actividad");
    const detalleItinerario = document.querySelector(".detalle-itinerario");

    if (ofertaSeleccionada) {
        detalleOferta.innerHTML = "";
        detalleOferta.innerHTML = `
                <video play controls class="col-md-6 col-12">
                    <source src="${ofertaSeleccionada.video}" type="video/mp4">
                </video>
                <div class="info-actividad col-md-6 col-12">
                    <p class="precio-actividad">Precio: ${ofertaSeleccionada.precioOferta} soles por persona</p>
                    <h2>${ofertaSeleccionada.nombre}</h2>
                    <p class="ubicacion-actividad">${ofertaSeleccionada.ubicacion}</p>
                    <p class="descripcion-actividad">${ofertaSeleccionada.descripcion}</p>
                    <p class="atractivos">Atractivos:</p>
                    <ul class="lista-atractivos">
                         ${Array.from({ length: ofertaSeleccionada.atractivos.length }, (_, index) => `<li class="atractivo">${ofertaSeleccionada.atractivos[index]}</li>`).join('')}
                    </ul>
                </div>
        `;
        detalleItinerario.innerHTML = "";
        detalleItinerario.innerHTML = `
                ${Array.from({ length: ofertaSeleccionada.itinerario.length }, (_, index) => `
                <div class="actividad-itinerario">
                    <p>${ofertaSeleccionada.itinerario[index].itinerarioHora}</p>
                    <ul class="lista-itinerario">
                        ${Array.from({ length: ofertaSeleccionada.itinerario[index].itinerarioActividad.length }, (_, index2) => `<li>${ofertaSeleccionada.itinerario[index].itinerarioActividad[index2]}</li>`).join('')}
                    </ul>
                </div>
                `).join('')}                          
        `;

        document.getElementById("oferta-seleccionada").style.display = "block";
        document.getElementById("ofertas-1").style.display = "none";
        document.getElementById("filtro").style.display = "none";
        document.getElementById("ofertas-2").style.display = "none";

    }


}

function mostrarReservas() {
    document.getElementById("oferta-seleccionada").style.display = "none";

    // Mostrar las ofertas
    document.getElementById("ofertas-1").style.display = "block";
    document.getElementById("ofertas-2").style.display = "block";
    document.getElementById("filtro").style.display = "block";
}

function cargarReservas() {
    const listaPreferencias = listaOfertas.filter(oferta => oferta.seccion === "preferencia");
    renderizarOfertas(listaPreferencias, ".ofertas-preferencias");
    const listaPopulares = listaOfertas.filter(oferta => oferta.seccion === "popular");
    renderizarOfertas(listaPopulares, ".ofertas-populares");
    const actividadesSeleccionadas = document.querySelectorAll('.actividad-seleccionada');
    actividadesSeleccionadas.forEach(actividad => {
        actividad.style.display = 'none';
    });
}

function mostrarLoginInicio() {
    document.getElementById("iniciar-form").style.display = "flex";
    document.getElementById("registrar-form").style.display = "none";
}

function mostrarLoginRegistro() {
    document.getElementById("registrar-form").style.display = "flex";
    document.getElementById("iniciar-form").style.display = "none";
}

const users = [
    {
        nombre: "María Gonzalez",
        correo: "maria-gonza@gmail.com",
        usuario: "maria.gonzalez23",
        clave: "012",
        rol: "cliente"
    },
    {
        nombre: "Andrea Molina",
        correo: "andreamolina@gmail.com",
        usuario: "AndreaM",
        clave: "345",
        rol: "empleado"
    },
    {
        nombre: "Andrea Porras",
        correo: "andreaporras@gmail.com",
        usuario: "AndreaP",
        clave: "678",
        rol: "empleado"
    },
    {
        nombre: "Ambar Cordova",
        correo: "ambarcordova@gmail.com",
        usuario: "AmbarC",
        clave: "901",
        rol: "empleado"
    },
    {
        nombre: "Nikol Carrasco",
        correo: "nikolcarrasco@gmail.com",
        usuario: "NikolC",
        clave: "234",
        rol: "empleado"
    },
    {
        nombre: "Alexandra De La Cruz",
        correo: "alexandradelacruz@gmail.com",
        usuario: "AlexandraD",
        clave: "567",
        rol: "empleado"
    }
]
document.addEventListener('DOMContentLoaded', function () {
    // Formulario iniciar sesión
    const loginForm = document.getElementById('iniciar-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var username = document.getElementById('usuario-inicio').value;
            var password = document.getElementById('clave-inicio').value;
            var errorMessage = document.getElementById('error-message');

            var user = users.find(user => user.usuario === username && user.clave === password);

            if (user) {
                localStorage.setItem('username', user.usuario);
                localStorage.setItem('rol', user.rol);
                window.location.href = "inicio.html";
            } else {
                errorMessage.textContent = "Usuario o contraseña incorrectos";
            }
        });
    }

    // Formulario de registro
    const registerForm = document.getElementById('registrar-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var username = document.getElementById('usuario-registro').value;
            var password = document.getElementById('clave-registro').value;
            var name = document.getElementById('nombre-registro').value;
            var email = document.getElementById('correo-registro').value;

            users.push({
                nombre: name,
                correo: email,
                usuario: username,
                clave: password,
                rol: "cliente"
            });

            var user = users.find(user => user.usuario === username && user.clave === password);

            if (user) {
                localStorage.setItem('username', user.usuario);
                localStorage.setItem('rol', user.rol);
                window.location.href = "inicio.html";
            } else {
                errorMessage.textContent = "Usuario o contraseña incorrectos";
            }
        });
    }

    // Función cerrar sesión
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('username');
            localStorage.removeItem('rol');
            window.location.href = "login.html";
        });
    }


});

//verifica al usuario
function verificarAcceso() {

    var username = localStorage.getItem('username');
    var rol = localStorage.getItem('rol');
    if (!username || !rol) {
        window.location.href = "login.html";
    } else if (rol !== "empleado") { //si no es empleado oculta el enlace al dashboard
        var dashboardLink = document.getElementById('dashboard-link');
        if (dashboardLink) {
            dashboardLink.style.display = 'none';
        }
        var dashboardLinkFooter = document.getElementById('dashboard-link-footer');
        if (dashboardLinkFooter) {
            dashboardLinkFooter.style.display = 'none';
        }
    }

}

document.addEventListener('DOMContentLoaded', function () {
    const fontSizeSelect = document.getElementById('fontSizeSelect');

    // Verifica si hay un tamaño de texto almacenado en localStorage
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize;
        if (fontSizeSelect) {
            fontSizeSelect.value = parseInt(savedFontSize); // Actualiza el valor del combo box
        }
    }

    // Verifica si el control de tamaño de fuente existe en la página actual
    if (fontSizeSelect) {
        // Escucha el evento de cambio en el control de tamaño de fuente
        fontSizeSelect.addEventListener('change', function () {
            const newSize = fontSizeSelect.value + 'px';
            document.body.style.fontSize = newSize;
            localStorage.setItem('fontSize', newSize); // Almacena el nuevo tamaño en localStorage
        });
    }
});