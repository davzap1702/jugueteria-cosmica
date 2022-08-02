//contact form validations.

const regExp = {
    nombre: /^[A-ZÁÉÍÚÓÑ][A-ZÁÉÍÓÚa-záéíóúñ\s?]{2,20}$/,
    tel: /^\d{0,10}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/,
    asunto: /^[a-záéíóúñÁÉÍÓÚA-Z0-9\s?.,_-¿\?!¡\(\):="'\/$%#*;<>&´]{0,40}$/,
    comentario: /^[a-záéíóúñÁÉÍÓÚA-Z0-9\s?.,_-¿\?!¡\(\):="'\/$%#*;<>&´]{10,300}$/
};
const inputs = document.querySelectorAll('.contact-form__data-wrapper > input, textarea');
const mandatoryInputs = [inputs[0], inputs[2], inputs[4]];
const alerts = document.querySelectorAll('p.alert');
const submitBtn = document.querySelector('button[type=submit]');

const validar = e => {
    switch (e.target) {
        case inputs[0]:
            regExp.nombre.test(e.target.value) ? ok(e) : wrong(e);
            submit();
            break;
        case inputs[1]:
            regExp.tel.test(e.target.value) ? ok(e) : wrong(e);
            submit();
            break;
        case inputs[2]:
            regExp.email.test(e.target.value) ? ok(e) : wrong(e);
            submit();
            break;
        case inputs[3]:
            regExp.asunto.test(e.target.value) ? ok(e) : wrong(e);
            submit();
            break;
        case inputs[4]:
            regExp.comentario.test(e.target.value) ? ok(e) : wrong(e);
            submit();
            break;
    }
};

function ok(e) {
    e.target.classList.remove('alert-bg');
    e.target.parentElement.children[2].classList.add('hide');

}
function wrong(e) {
    e.target.classList.add('alert-bg');
    e.target.parentElement.children[2].classList.remove('hide');
}

function submit() {
    const errors = [];
    alerts.forEach(alert => {
        if (!alert.classList.contains('hide')) {
            errors.push(alert);
        }
    });
    if (errors.length > 0) {
        submitBtn.classList.add('disabled-btn');
        submitBtn.disabled = true;
    } else {
        submitBtn.classList.remove('disabled-btn');
        submitBtn.disabled = false;
    }
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    mandatoryInputs.forEach(input => {
        if (input.value.length == 0) {
            input.parentElement.children[2].classList.remove('hide');
            input.classList.add('alert-bg');
            submit();
        }
        if(input.value.length > 0){
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    });

});

inputs.forEach(input => {
    input.addEventListener('keyup', validar);
});