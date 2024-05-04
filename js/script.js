const buttonTop = document.getElementById('button-top');

function showButtonTop(show) {
    let visibility = show ? 'visible' : 'hidden';
    
    buttonTop.style.visibility = visibility;
}

window.onscroll = function() {
    showButtonTop(document.documentElement.scrollTop > 0)
}
