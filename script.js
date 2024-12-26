document.getElementById('celebrateBtn').addEventListener('click', () => {
    createConfetti();
    showImage();
});

function createConfetti() {
    const colors = ['#FFC700', '#FF3D00', '#00C853', '#2979FF', '#D5006D'];
    const confettiCount = 100;

    // Función que genera confeti continuamente
    const generateConfetti = () => {
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '0'; // Comenzar desde la parte superior
            confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
            document.body.appendChild(confetti);
            
            // Remover confeti después de que haya caído
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    };

    // Generar confeti cada 100 ms
    setInterval(generateConfetti, 100);
}

function showImage() {
    const image = document.getElementById('celebrationImage');
    image.style.display = 'block'; // Mostrar la imagen
    image.classList.add('fade-in', 'animate-image'); // Añadir clases de animación
}
