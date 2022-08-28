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

const destino = destinos.filter((destino) => destino.id == id)[0];

setClima(destino.WOEID);

document.getElementById('destino-nome').innerHTML = destino.name;
document.getElementById('destino-titulo').innerHTML = destino.title;
document.getElementById('destino-desc').innerHTML = destino.description;
document.getElementById('destino-img').src = destino.imgDesc;

async function setClima(WOEID) {
  const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=eeb69df6&woeid=${WOEID}`);
  const clima = await response.json();
  const divClima = document.getElementById('clima');
  document.getElementById('destino').innerHTML = destino.name;

  clima.results.forecast.forEach((dia) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h6 class="clima-date">${dia.date} ${dia.weekday}</h6>
      <p>${dia.description}</p>
      <p><span class="min">${dia.min}°</span> - <span class="max">${dia.max}°</span</p>
    `;

    divClima.appendChild(div);
  });
}
