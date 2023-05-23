// Codigo Copiar //

var botonCopiar = document.getElementById('btn-copiar');
botonCopiar.onclick = copiarPortaPapeles;

function copiarPortaPapeles() {
  var texto = document.getElementById('resultado-final');
  texto.select(); //texto seleccionado
  try {
    var successful = document.execCommand('copy'); // Copiando
    if (successful) texto.innerHTML = 'Mensaje Copiado!';
    else texto.innerHTML = 'su mensaje no pudo ser copiado!';
  } catch (err) {
    texto.innerHTML = 'Navegador no soportado!';
  }
}
