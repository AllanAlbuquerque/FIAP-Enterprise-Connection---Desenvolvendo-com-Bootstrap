const elms = document.getElementsByClassName('splide');

for (let i = 0; i < elms.length; i++) {
  new Splide(elms[i], {
    type: 'loop',
    perPage: 4,
    gap: '2%',
    breakpoints: {
      1366: {
        gap: '1%',
        perPage: 2,
      },
      768: {
        gap: '1%',
        perPage: 1,
      },
    },
  }).mount();
}

const destino = destinos.filter((destino) => (destino.id = id))[0];

document.getElementById('destino-nome').innerHTML = destino.name;
document.getElementById('destino-titulo').innerHTML = destino.title;
document.getElementById('destino-desc').innerHTML = destino.description;
document.getElementById('destino-img').src = destino.imgDesc;
