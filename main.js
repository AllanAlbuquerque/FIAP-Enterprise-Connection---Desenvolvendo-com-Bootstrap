let view = 'inicio';
const title = document.querySelector('title');
const links = document.querySelectorAll('.nav-link');
let amadeusAPI = {
  client_id: 'r8TlQTSoSC1TqXdrbNlFuaFPdpmsGZbs',
  client_secret: 'oAmGdqwsOIXQkUvM',
  token: '',
};

async function getToken() {
  try {
    const params = new URLSearchParams();
    params.append('client_id', amadeusAPI.client_id);
    params.append('client_secret', amadeusAPI.client_secret);
    params.append('grant_type', 'client_credentials');

    const rsp = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', params);
    amadeusAPI.token = rsp.data.access_token;
  } catch (error) {
    console.log('Erro ao obter token', error);
  }
}

getToken();

document.addEventListener('DOMContentLoaded', function () {
  navToInicio();
});

function navToInicio(target) {
  if (target) {
    links.forEach((l) => l.classList.remove('active'));
    target.classList.add('active');
  }
  navigateTo('./views/inicio/inicio.html');
  title.text = 'Início | Gulliver Traveller';
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
    imgBack: './images/rj_header.jpg',
    WOEID: '455825',
    aeroporto: 'RIO',
  },
  {
    id: 'gr',
    name: 'Gramado - RS',
    category: 'Turismo',
    title: 'Sobre Gramado',
    description: `A pequena cidade brasileira de Gramado é um refúgio pitoresco e verdejante que abriga algumas surpresas encantadoras. Depois de se divertir bastante nos pedalinhos e nos bosques de pinheiros da Floresta Negra em torno do Lago Negro, faça uma visita ao Snowland, o único parque de neve Indoor da América Latina. As crianças vão adorar o Mini Mundo, um parque de miniaturas que contém réplicas minúsculas de paisagens conhecidas.`,
    imgDesc: './images/gr.jpg',
    WOEID: '457224',
    aeroporto: 'CXJ',
  },
  {
    id: 'jr',
    name: 'Jericoacoara - CE',
    category: 'Praias',
    title: 'Sobre Jericoacoara',
    description: `Com inúmeras praias, belíssimas montanhas e o samba e a bossa nova ao fundo, é fácil se apaixonar pelo Rio de Janeiro. Imortalizada em uma canção, a praia de Ipanema continua sendo o lugar perfeito para caminhar,  pegar um bronzeado e se exibir.`,
    imgDesc: './images/jr.jpg',
    WOEID: '26803987',
    aeroporto: 'JJD',
  },
  {
    id: 'bg',
    name: 'Baía dos Golfinhos - RN',
    category: 'Praias',
    title: 'Sobre Baia dos Golfinhos',
    description: `Excelente para caminhada ou natação, mar calmo com apresença de Golfinhos, e poucas barracas incluindo escola de surf e aluguel de caiaques, pranchas e frescobol. A Praia do Curral, ou popularmente conhecida como Baia do Golfinhos, é ideal para quem quer um contato maior com esses mamíferos. Aqui eles são os donos da casa e costumam receber seus visitantes com saltos e acrobacias.`,
    imgDesc: './images/bg.jpg',
    WOEID: '90200648',
    aeroporto: 'NAT',
  },
];

function getEmpresa(id) {
  let empresa
  switch (id) {
    case 'AD':
      empresa = 'Azul Linhas Aereas Brasileiras'
      break;
    case 'G3':
      empresa = 'GOL Linhas Aereas S.A'
      break;
    case 'LA':
      empresa = 'LATAM Airlines Group S.A. dba LATAM Airlines Group'
      break;
    default:
      empresa = id
      break;
  }


  return empresa
}