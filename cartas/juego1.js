const emojis = ['🌞', '🌙', '⭐', '⚡', '🔥', '💧', '🍀', '🌹', '🍎', '🐶', '🐱', '🦊', '🐸', '🐵', '🐘', '🦉', '🐢', '🐝', '🦄', '🧸', '🎩', '👑', '🧪', '🕹️']; // 24 emojis uniques
let baraja = [...emojis, ...emojis];
let seleccionadas = [];
let numeroSeleccionadas = 0;

const TABLERO = document.getElementById('tablero');
const MESSAGE = document.getElementById('message');

function crearTablero() {
    TABLERO.innerHTML = '';
    for (let i = 0; i < baraja.length; i++) {
        const emoji = baraja[i];
        const carta = document.createElement('div');
        carta.className = 'carta oculta';
        carta.dataset.index = i;
        carta.textContent = emoji;
        carta.addEventListener('click', () => seleccionarCarta(i));
        TABLERO.appendChild(carta);
    }
}

function seleccionarCarta(indice) {
    const carta = TABLERO.children[indice];
    if (carta.classList.contains('oculta') && numeroSeleccionadas < 6) {
        carta.classList.remove('oculta');
        seleccionadas.push(carta);
        numeroSeleccionadas++;

        if (numeroSeleccionadas === 6) {
            verificarSeleccion();
        }
    }
}

function verificarSeleccion() {
    const emojisSeleccionados = seleccionadas.map(carta => carta.textContent);
    const conteo = {};

    emojisSeleccionados.forEach(emoji => {
        conteo[emoji] = (conteo[emoji] || 0) + 1;
    });

    const tresIguales = Object.values(conteo).some(c => c >= 3);

    if (tresIguales) {
        MESSAGE.textContent = "¡Ganaste! 🎉";
    } else {
        MESSAGE.textContent = "Perdiste, intenta de nuevo. 😢";
        setTimeout(() => {
            for (const carta of seleccionadas) {
                carta.classList.add('oculta');
            }
            seleccionadas = [];
            numeroSeleccionadas = 0;
        }, 2000);
    }
}

// Initialisation
crearTablero();
