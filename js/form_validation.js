const form = document.getElementById('form-email');
const formButton = document.getElementsByClassName('form-button')[0];
const warning = document.getElementsByClassName('warning')[0];

function validateForm() {
    const inputs = form.getElementsByClassName('form-input');

    for (input of inputs) {
        if (!input.validity.valid || input.value.trim() == '') {
            return false;
        }
    }

    return true;
}

formButton.addEventListener('click', function(event) {
    if (!validateForm()) {
        warning.style.display = 'block';
        event.preventDefault();
    } else {
        warning.style.display = 'none';
    }
});
