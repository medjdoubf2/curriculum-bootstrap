// cleanText.js

function limpiarTextos(texto) {
    // Eliminar acentos
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n' };
    texto = texto.split('').map(char => acentos[char] || char).join('');

    // Eliminar signos de puntuación y espacios en blanco
    texto = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    texto = texto.replace(/\s+/g, ' ').trim();

    return texto.toLowerCase(); // Convertir a minúsculas
}
function normalizarTexto(texto) {
   // return devuelve un valor desde la función para poder utilizarlo en otras partes del código.
   return texto 
    .toLowerCase()                                           // minúsculas
    .normalize('NFD')                                        // separa letras de los acentos
    .replace(/[\u0300-\u036f]/g, '')                         // elimina los acentos
    .replace(/\b(el|la|los|las|un|una|unos|unas)\b/g, '')    // quita artículos
    .replace(/\s+/g, '')                                     // elimina espacios extra
}