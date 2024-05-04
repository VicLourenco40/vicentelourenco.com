const buttonTop = document.getElementById('button-top');
const buttonDarkMode = document.getElementById('button-dark-mode');

function showButtonTop(show) {
    let visibility = show ? 'visible' : 'hidden';
    
    buttonTop.style.visibility = visibility;
}

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

window.onscroll = function() {
    showButtonTop(document.documentElement.scrollTop > 0)
}

buttonDarkMode.addEventListener('click', function() {
    darkMode = !darkMode;
    document.cookie = 'darkMode=' + darkMode.toString() + "; path=/";
    switchDarkMode();
});

let darkMode = getDarkModeCookie();

if (darkMode == true) {
    switchDarkMode();
}
