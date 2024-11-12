const html = document.querySelector('html');
const buttonFoco = document.querySelector('.app__card-button--foco');
const buttonCurto = document.querySelector('.app__card-button--curto');
const buttonLongo = document.querySelector('.app__card-button--longo');

const imageApp = document.querySelector('.app__image');

buttonFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
    buttonFoco.classList.add('active');
    imageApp.setAttribute('src', './imagens/foco.png');
})

buttonFoco.addEventListener('blur', () => {
    buttonFoco.classList.remove('active');
})



buttonCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    buttonCurto.classList.add('active');
    imageApp.setAttribute('src', './imagens/descanso-curto.png');
})

buttonCurto.addEventListener('blur', () => {
    buttonCurto.classList.remove('active');
})



buttonLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    buttonLongo.classList.add('active');
    imageApp.setAttribute('src', './imagens/descanso-longo.png')
})

buttonLongo.addEventListener('blur', () => {
    buttonLongo.classList.remove('active');
})