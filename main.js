let view = 'inicio';
const title = document.querySelector('title');
const links = document.querySelectorAll('.nav-link');

document.addEventListener('DOMContentLoaded', function () {
  navToInicio();
});

function navToInicio(target) {
  if (target) {
    links.forEach((l) => l.classList.remove('active'));
    target.classList.add('active');
  }
  navigateTo('./views/inicio/inicio.html');
  title.text = ' Gulliver Traveller | inicio';
}
function navToFazer(target) {
  links.forEach((l) => l.classList.remove('active'));
  target.classList.add('active');
  navigateTo('./views/fazer/fazer.html');
  title.text = ' O que fazer | Gulliver Traveller';
}
function navToHospedagens(target) {
  links.forEach((l) => l.classList.remove('active'));
  target.classList.add('active');
  navigateTo('./views/hospedagens/hospedagens.html');
  title.text = ' Hospedagens | Gulliver Traveller';
}
function navToRestaurantes(target) {
  links.forEach((l) => l.classList.remove('active'));
  target.classList.add('active');
  navigateTo('./views/restaurantes/restaurantes.html');
  title.text = ' Restaurantes | Gulliver Traveller';
}
function navToLogin(target) {
  links.forEach((l) => l.classList.remove('active'));
  target.classList.add('active');
  navigateTo('./views/login/login.html');
  title.text = ' Login | Gulliver Traveller';
}
function navToDestino(id) {
  navigateTo('./views/destinos/destinos.html', id);
  title.text = ' Destinos | Gulliver Traveller';
}

function navigateTo(path, id = '') {
  fetch(path)
    .then((data) => {
      return data.text();
    })
    .then((html) => {
      const content = document.getElementById('app');
      content.innerHTML = html;

      const scripts = content.querySelectorAll('script');
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].innerText) {
          eval(scripts[i].innerText);
        } else {
          fetch(scripts[i].src).then(function (data) {
            data.text().then(function (r) {
              eval(r);
            });
          });
        }
        scripts[i].parentNode.removeChild(scripts[i]);
      }
    });
}

const destinos = [
  {
    id: 'rj',
    name: 'Rio de Janeiro - RJ',
    category: 'Praias',
    title: 'Uma metrópole urbana movida pela cadência do samba',
    description: `Com inúmeras praias, belíssimas montanhas e o samba e a bossa nova ao fundo, é fácil se apaixonar pelo Rio de Janeiro. Imortalizada em uma canção, a praia de Ipanema continua sendo o lugar perfeito para caminhar,  pegar um bronzeado e se exibir.`,
    imgDesc: './images/rj.jpg',
  },
  {
    id: 'gr',
    name: 'Gramado - RS',
    category: 'Turismo',
    title: 'Sobre Gramado',
    description: `A pequena cidade brasileira de Gramado é um refúgio pitoresco e verdejante que abriga algumas surpresas encantadoras. Depois de se divertir bastante nos pedalinhos e nos bosques de pinheiros da Floresta Negra em torno do Lago Negro, faça uma visita ao Snowland, o único parque de neve Indoor da América Latina. As crianças vão adorar o Mini Mundo, um parque de miniaturas que contém réplicas minúsculas de paisagens conhecidas.`,
    imgDesc: './images/gr.jpg',
  },
  {
    id: 'jr',
    name: 'Jericoacoara - CE',
    category: 'Praias',
    title: 'Sobre Jericoacoara',
    description: `Com inúmeras praias, belíssimas montanhas e o samba e a bossa nova ao fundo, é fácil se apaixonar pelo Rio de Janeiro. Imortalizada em uma canção, a praia de Ipanema continua sendo o lugar perfeito para caminhar,  pegar um bronzeado e se exibir.`,
    imgDesc: './images/jr.jpg',
  },
  {
    id: 'bg',
    name: 'Baía dos Golfinhos - RN',
    category: 'Praias',
    title: 'Sobre Baia dos Golfinhos',
    description: `Excelente para caminhada ou natação, mar calmo com apresença de Golfinhos, e poucas barracas incluindo escola de surf e aluguel de caiaques, pranchas e frescobol. A Praia do Curral, ou popularmente conhecida como Baia do Golfinhos, é ideal para quem quer um contato maior com esses mamíferos. Aqui eles são os donos da casa e costumam receber seus visitantes com saltos e acrobacias.`,
    imgDesc: './images/bg.jpg',
  },
];
