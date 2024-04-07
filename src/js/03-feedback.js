import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form.feedback-form');

  const saveFormDataToLocalStorageThrottled = throttle(() => {
    const data = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500);

  form.addEventListener('input', ev => {
    saveFormDataToLocalStorageThrottled();
  });

  const formDataStr = localStorage.getItem('feedback-form-state');
  if (formDataStr) {
    const formData = JSON.parse(formDataStr);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } else {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }

  form.addEventListener('submit', ev => {
    ev.preventDefault();
    console.log({
      email: form.elements.email.value,
      message: form.elements.message.value,
    });
    form.reset();
  });
});
