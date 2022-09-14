const myModal = document.getElementById('modalLocalization');

myModal.addEventListener('show.bs.modal', (e) => {
  switch (e.relatedTarget.id) {
    case 'fairmont':
      document.getElementById('localTitle').innerHTML = 'Hotel Fairmont Rio de Janeiro Copacabana';
      document.getElementById('gmap_canvas').src =
        'https://maps.google.com/maps?q=Fairmont%20Rio%20de%20Janeiro%20Copacabana&t=&z=13&ie=UTF8&iwloc=&output=embed';
      break;
    case 'coline':
      document.getElementById('localTitle').innerHTML = 'Hotel Colline de France';
      document.getElementById('gmap_canvas').src = 'https://maps.google.com/maps?q=Hotel%20Colline%20de%20France&t=&z=13&ie=UTF8&iwloc=&output=embed';
      break;
    case 'bravaria':
      document.getElementById('localTitle').innerHTML = 'Bravaria Sport Hotel';
      document.getElementById('gmap_canvas').src = 'https://maps.google.com/maps?q=Bravaria%20Sport%20Hotel&t=&z=13&ie=UTF8&iwloc=&output=embed';
      break;
    case 'ort':
      document.getElementById('localTitle').innerHTML = 'Ort Hotel';
      document.getElementById('gmap_canvas').src = 'https://maps.google.com/maps?q=Ort%20Hotel&t=&z=13&ie=UTF8&iwloc=&output=embed';
      break;
    case 'hyatt':
      document.getElementById('localTitle').innerHTML = 'Grand Hyatt São Paulo';
      document.getElementById('gmap_canvas').src =
        'https://maps.google.com/maps?q=Grand%20Hyatt%20S%C3%A3o%20Paulo&t=&z=13&ie=UTF8&iwloc=&output=embed';
      break;
    case 'windsor':
      document.getElementById('localTitle').innerHTML = 'Miramar Hotel by Windsor';
      document.getElementById('gmap_canvas').src =
        'https://maps.google.com/maps?q=Miramar%20Hotel%20by%20Windsor&t=&z=13&ie=UTF8&iwloc=&output=embed';
      break;

    default:
      break;
  }
});
