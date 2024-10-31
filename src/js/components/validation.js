import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";

(function () {
  const form = document.querySelector('.section-order__form');

  const inputs = form.querySelectorAll('.section-order__input');
  const inputName = form.querySelector('#name');
  const inputEmail = form.querySelector('#email');
  const inputPhone = form.querySelector('#phone');

  let patternName = /[a-zA-Zа-яА-Я ]+$/;
  let patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (inputPhone) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(inputPhone);
  }

  const validateSuccess = () => {
    if (inputName) {
      if (patternName.test(inputName.value)) {
        inputName.classList.add('section-order__input--success');
      }
    }

    if (inputEmail) {
      if (patternEmail.test(inputEmail.value)) {
        inputEmail.classList.add('section-order__input--success');
      }
    }

    if (inputPhone) {
      const phone = inputPhone.inputmask.unmaskedvalue();

      if (phone.length === 10) {
        inputPhone.classList.add('section-order__input--success');
      }
    }
  }

  const validate = () => {

    let success = true;

    if (inputName) {
      if (!patternName.test(inputName.value) || inputName.value.trim() == '') {
        success = false;
        inputName.value = '';
        inputName.classList.add('section-order__input--error');
      }
    }

    if (inputEmail) {
      if (!patternEmail.test(inputEmail.value)) {
        success = false;
        inputEmail.classList.add('section-order__input--error');
      }
    }

    if (inputPhone) {
      const phone = inputPhone.inputmask.unmaskedvalue();

      if (inputPhone.value === '' || phone.length < 10) {
        success = false;
        inputPhone.classList.add('section-order__input--error');
      }
    }

    return success;
  }

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      if (input.classList.contains('section-order__input--error')) {
        input.classList.remove('section-order__input--error');
      }
    });

    input.addEventListener('input', (e) => {

      if (input.classList.contains('section-order__input--success')) {
        input.classList.remove('section-order__input--success');
      }

      validateSuccess();

      const targetElement = e.target;

      if (targetElement.value.trim() == '') {
        targetElement.value = '';
      }

    });
  });

  if (inputName) {
    inputName.addEventListener('input', (e) => {
      const targetElement = e.target;

      if (!patternName.test(targetElement.value)) {
        targetElement.value = targetElement.value.replace(/[^a-zA-Zа-яА-Я ]/g, '');
      }

    });
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!validate()) {
      console.log('error')
    } else {
      console.log('ok')
    }
  })
})();
