// Codigo Limpiar //

const botonLimpiar = document.querySelector('#limpiar');
botonLimpiar.addEventListener('click', limpiar);

function limpiar(event) {
  event.preventDefault();
  document.querySelector('.area').value = '';
  document.querySelector('#resultado-final').value = '';
  location.reload();
}
