var uc = document.getElementById('uc');
var cm = document.getElementById('cm');
var cc = document.getElementById('cc');
var ifr = document.getElementById('iframe');

var selectedDiv = uc;

// Estilo inicial corrigido
uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';

function ultCad(){
    if (selectedDiv !== uc) {
        resetStyles();
        selectedDiv = uc;
        uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function cadmin(){
    if (selectedDiv !== cm) {
        resetStyles();
        selectedDiv = cm;
        cm.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function comco(){
    if (selectedDiv !== cc) {
        resetStyles();
        selectedDiv = cc;
        cc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function resetStyles() {
    uc.style.backgroundColor = 'white';
    cm.style.backgroundColor = 'white';
    cc.style.backgroundColor = 'white';
}

// Hover effects
uc.onmouseover = function() {
    if (selectedDiv !== uc) {
        uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

uc.onmouseout = function() {
    if (selectedDiv !== uc) {
        uc.style.backgroundColor = 'white';
    }
};

cm.onmouseover = function() {
    if (selectedDiv !== cm) {
        cm.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

cm.onmouseout = function() {
    if (selectedDiv !== cm) {
        cm.style.backgroundColor = 'white';
    }
};

cc.onmouseover = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

cc.onmouseout = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = 'white';
    }
};

function selecionaPagina(){
    if(selectedDiv === uc){
        ifr.src = "profile-last-registered.html";
    }else if(selectedDiv === cm){
        ifr.src = "profile-shared-by-me.html";
    }else if(selectedDiv === cc){
        ifr.src = "profile-shared-with-me.html";
    }
}