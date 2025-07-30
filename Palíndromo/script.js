document.getElementById('verificar').addEventListener('click', function() {
    const frase = document.getElementById('frase').value;
    const fraseLimpia = limpiarTextos(frase);
    const esPalindromo = esPalindromoFrase(fraseLimpia);
    
    document.getElementById('resultado').innerText = esPalindromo 
        ? '¡Es un palíndromo!' 
        : 'No es un palíndromo.';
});

function esPalindromoFrase(frase) {
    const fraseReversa = frase.split('').reverse().join('');
    return frase === fraseReversa;
}