document.addEventListener('DOMContentLoaded', function () {
    // Boton de modo oscuro
    const switchButton = document.getElementById('switch');

    // Verificar el modo guardado en localStorage
    if (localStorage.getItem('Mode') === 'Dark') {
        document.body.classList.add('dark');
        switchButton.classList.add('active');
    } else {
        document.body.classList.remove('dark');
        switchButton.classList.remove('active');
    }

    // Agregar el evento click al botón
    switchButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        switchButton.classList.toggle('active');

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('Mode', 'Dark');
        } else {
            localStorage.removeItem('Mode');
        }
    });

    const rangeInput = document.getElementById('satisfaccion');
    const progressBar = document.querySelector('.progress-bar');
    const progressP = document.getElementById('progress_p');

    rangeInput.addEventListener('input', function () {
        const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
        progressBar.style.maxWidth = '95%';
        progressBar.style.width = `${value}%`;
        const valorParceado = parseInt(rangeInput.value);
        progressP.innerHTML = `${valorParceado}%`;
    });
});
