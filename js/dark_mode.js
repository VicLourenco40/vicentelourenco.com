const buttonDarkMode = document.getElementById('button-dark-mode');

function getDarkModeCookie() {
    if (document.cookie.includes('darkMode=true')) {
        return true;
    }
    return false;
}

function switchDarkMode() {
    const documentStyle = document.documentElement.style;
    const buttonDarkModeIcon = buttonDarkMode.childNodes[0];
    
    if (darkMode) {
        documentStyle.setProperty('--color-text', 'gainsboro');
        documentStyle.setProperty('--color-text-light', 'dimgray');
        documentStyle.setProperty('--color-light', 'rgb(0, 33, 66)');
        documentStyle.setProperty('--color-background', 'black');

        buttonDarkModeIcon.classList.remove('bi-moon-fill');
        buttonDarkModeIcon.classList.add('bi-brightness-high-fill');
    } else {
        documentStyle.setProperty('--color-text', 'black');
        documentStyle.setProperty('--color-text-light', 'darkgray');
        documentStyle.setProperty('--color-light', 'rgb(192, 225, 255)');
        documentStyle.setProperty('--color-background', 'white');

        buttonDarkModeIcon.classList.remove('bi-brightness-high-fill');
        buttonDarkModeIcon.classList.add('bi-moon-fill');
    }
}

function setTransitions(transition) {
    let elements = document.querySelectorAll('body, div, p, a, input, textarea, i');

    for (let element of elements) {
        element.style.transition = transition;
    }
}

buttonDarkMode.addEventListener('click', function() {
    darkMode = !darkMode;
    document.cookie = 'darkMode=' + darkMode.toString() + "; expires=Wed, 31 Dec 2034 23:59:59 GMT; path=/";
    switchDarkMode();
});

let darkMode = getDarkModeCookie();

if (darkMode == true) {
    setTransitions('none');
    switchDarkMode();
}

// Without this timeout, the transitions will re-enable
// before the colors have time to change, resulting in a
// "flash" when switching pages if the user has dark mode enabled
setTimeout(function () {
    setTransitions('color 0.3s, background-color 0.3s');
}, 0);
