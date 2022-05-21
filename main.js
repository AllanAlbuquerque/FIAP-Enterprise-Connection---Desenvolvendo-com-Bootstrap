let view = 'inicio';
const title = document.querySelector('title');

document.addEventListener('DOMContentLoaded', function () {
  navToInicio();
});


function navToInicio() {
  navigateTo('./views/inicio/inicio.html');
  title.text = ' Gulliver Traveller | inicio';
}
function navToFazer() {
  navigateTo('./views/fazer/fazer.html');
  title.text = ' O que fazer | Gulliver Traveller';
}
function navToHospedagens() {
  navigateTo('./views/hospedagens/hospedagens.html');
  title.text = ' Hospedagens | Gulliver Traveller';
}
function navToRestaurantes() {
  navigateTo('./views/restaurantes/restaurantes.html');
  title.text = ' Restaurantes | Gulliver Traveller';
}
function navToLogin() {
  navigateTo('./views/login/login.html');
  title.text = ' Login | Gulliver Traveller';
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
