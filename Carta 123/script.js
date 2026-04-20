/* ========================================
   SCRIPT - INTERACCIONES ELABORADAS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.getElementById('giftButton');
    const initialMessage = document.getElementById('initialMessage');
    const giftScene = document.getElementById('giftScene');
    const boxLid = document.getElementById('boxLid');
    const bouquetContainer = document.getElementById('bouquetContainer');
    const finalMessage = document.getElementById('finalMessage');

    let isOpened = false;

    // Efecto departículas al hacer clic en el regalo
    giftButton.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;

        // Ocultar mensaje inicial
        initialMessage.classList.add('hidden');

        // Mostrar la caja de regalo
        setTimeout(() => {
            giftScene.classList.add('active');
            createConfetti();
        }, 300);

        // Abrir la tapa después de un momento
        setTimeout(() => {
            boxLid.classList.add('open');
            createMoreConfetti();
        }, 1000);

        // Mostrar el ramo de tulipanes
        setTimeout(() => {
            giftScene.style.display = 'none';
            bouquetContainer.classList.add('active');

            // Mostrar el mensaje final
            setTimeout(() => {
                finalMessage.classList.add('active');
            }, 1000);
        }, 2500);
    });

    // Función para crear confetti
    function createConfetti() {
        const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#DDA0DD', '#FFD700', '#FF6B6B'];
        const container = document.querySelector('.container');

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                confetti.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 10 + 5}px;
                    height: ${Math.random() * 10 + 5}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * 100}vw;
                    top: -20px;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                    opacity: 0.8;
                    pointer-events: none;
                    z-index: 100;
                    animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
                    transform: rotate(${Math.random() * 360}deg);
                `;
                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 4000);
            }, i * 30);
        }
    }

    function createMoreConfetti() {
        const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#DDA0DD', '#FFD700'];

        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                confetti.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 8 + 4}px;
                    height: ${Math.random() * 8 + 4}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${40 + Math.random() * 20}vw;
                    top: 40vh;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                    opacity: 0.9;
                    pointer-events: none;
                    z-index: 100;
                    animation: confettiBurst ${Math.random() * 1.5 + 1}s ease-out forwards;
                `;
                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 3000);
            }, i * 40);
        }
    }

    // Agregar estilos de animación de confetti
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.8;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        @keyframes confettiBurst {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 0.9;
            }
            100% {
                transform: translate(
                    ${(Math.random() - 0.5) * 400}px,
                    ${-200 - Math.random() * 300}px
                ) rotate(360deg);
                opacity: 0;
            }
        }
        
        .confetti-piece {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);

    // Efecto parallax suave en el fondo
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.floating-particles span');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 10;
            particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Agregar hover effects a los tulipanes
    const tulips = document.querySelectorAll('.tulip');
    tulips.forEach((tulip, index) => {
        tulip.addEventListener('mouseenter', () => {
            tulip.style.animation = 'tulipWiggle 0.5s ease-in-out';
        });
        tulip.addEventListener('animationend', () => {
            tulip.style.animation = '';
        });
    });

    // Agregar estilo de wiggle
    const wiggleStyle = document.createElement('style');
    wiggleStyle.textContent = `
        @keyframes tulipWiggle {
            0%, 100% { transform: translateX(-50%) rotate(var(--rotation, 0deg)); }
            25% { transform: translateX(-50%) rotate(calc(var(--rotation, 0deg) + 5deg)); }
            75% { transform: translateX(-50%) rotate(calc(var(--rotation, 0deg) - 5deg)); }
        }
    `;
    document.head.appendChild(wiggleStyle);

    // Sonido suave (opcional, descomenta si quieres)
    /*
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2Onp2Pg2lZZWJnbnqHjZCOg2lZZWFnboSHjJSDaVllYmdug4eMkoRqW2ZiaG6Dh4yThWxdX2twfYaNkYVrX2Rrb3+DipCEa15laG5+gYaKj4RrXmRpb3+BhoqPhGxdYmptfX+Fio6EbF5jaW5+gYWKjoRrXmNpb3+BhoqOhGxeY2lvgIGFig2FbF5jaW9/gIWKDIVrXmRpb3+AhoqMhGxeY2lvgIGFish');
    giftButton.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
    });
    */

    console.log('💝 Sorpresa cargada correctamente');
});
