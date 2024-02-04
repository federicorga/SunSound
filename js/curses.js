// script.js

let cursos = []; // Variable global para almacenar los cursos
let currentIndex = 0; // Agrega la declaración de currentIndex


function cargarcursos() {
  fetch('json/curses.json') // Cambia la ruta según sea necesario
    .then(response => response.json())
    .then(data => {
      cursos = data;
      mostrarDetallecurso(0); // Mostrar el primer curso al cargar la página
      mostrarCardsCursos(); // Mostrar todas las cards al cargar la página
    })
    .catch(error => console.error('Error al cargar los cursos:', error));
}

function mostrarDetallecurso(index) {
  const curso = cursos[index];

  if (curso) {
    const detallecurso = document.getElementById('detallecurso');
    detallecurso.className="curse-section-detail"
    detallecurso.innerHTML = `

    <img class="img-curse-detail" src="${curso.imgUrl}"></img>
    <div class="content-tit-p-curse-detail">
    <h2 class="title-curse-detail">${curso.tipoCurso}</h3>
    <h3 class="subtitle-curse-detail">${curso.nombre}</h2>
      
      <div class="content-p-curse-detail" id="descripcioncurso">
      ${curso.descripcion.map(parrafo => `<p class="p-curse-detail">${parrafo}</p>`).join('')}
    </div>
    <div class="btns-curso-card">
    <a class="link-curse-inscrip-detail" href="http://alanorte.com.ar/inscribirse/#form" target="_blank">INSCRIBITE AHORA</a>
    <a class="link-curse-inscrip-detail" href="#img-alaNorte">LISTA DE CURSOS</a>
    <div>
    </div>
    `;
  } else {
    console.error('curso no encontrado');
  }
}



function mostrarCardsCursos() {
    const cardsContainer = document.getElementById('cards-container');

    cursos.forEach(curso => {
        const card = document.createElement('div');
        card.className = 'cardCurso';

        // Configurar el evento de clic para redirigir al detalle
        card.addEventListener('click', () => {
            mostrarDetallecurso(curso.id); // Puedes cambiar la URL según tu estructura
            // Agregar el código para desplazar la página hacia la parte específica con id
            const elementoConId = document.getElementById('detallecurso');
            if (elementoConId) {
                elementoConId.scrollIntoView({ behavior: 'smooth' });}
        });

        const img = document.createElement('img');
        
        img.src = curso.imgUrl;
        card.appendChild(img);

        cardsContainer.appendChild(card);
    });
}



document.addEventListener('DOMContentLoaded', cargarcursos);


document.addEventListener('DOMContentLoaded', cargarcursos);



/*
function mostrarcursoAnterior() {
    currentIndex = (currentIndex - 1 + cursos.length) % cursos.length;
    mostrarDetallecurso(currentIndex);
  }
  
  function mostrarcursosiguiente() {
    currentIndex = (currentIndex + 1) % cursos.length;
    mostrarDetallecurso(currentIndex);
  }
  
  

document.getElementById('btnAnterior').addEventListener('click', mostrarProductoAnterior);
document.getElementById('btnSiguiente').addEventListener('click', mostrarcursosiguiente);
*/