var AbrirPopUp = document.getElementById('AbrirPopUp');
var overlay = document.getElementById('overlay');
var btnclose = document.getElementById('btn-close');

AbrirPopUp.addEventListener('click', function(){ 
    overlay.classList.add('active');
});  

btnclose.addEventListener('click', function(){ 
    overlay.classList.remove('active');
});
