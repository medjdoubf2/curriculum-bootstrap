document.getElementById('animateBtn').addEventListener('click', function() {
    const animationDiv = document.getElementById('animation');
    animationDiv.style.display = 'block';
    animationDiv.classList.add('fade-in');

    setTimeout(() => {
        animationDiv.classList.remove('fade-in');
    }, 2000);
});

// Animación CSS
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 2s forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);