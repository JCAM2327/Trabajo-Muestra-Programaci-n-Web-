const preguntas = document.querySelectorAll('.faq-question');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        pregunta.parentElement.classList.toggle('active');
    });
});