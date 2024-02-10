document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Ing. Informática", "Ing. Sistema", "Ing. Redes Y Telecom", "Ing. Robótica"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typewriter-text').textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 200); // Ajusta la velocidad de la animación aquí
    })();
});