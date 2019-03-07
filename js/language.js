var portuguese = document.getElementById('pt_click'),
    english = document.getElementById('en_click'),
    pt_txt = document.querySelectorAll('#pt'),
    en_txt = document.querySelectorAll('#en'),
    nb_pt = pt_txt.length,
    nb_en = en_txt.length;
    lang = document.getElementsByTagName('html')[0];


portuguese.addEventListener('click', function() {
    changeLang('portuguese');
    langue(portuguese,english);
}, false);

english.addEventListener('click', function() {
    changeLang('english');
    langue(english,portuguese);
}, false);

function changeLang(language) {
    if(language === 'portuguese') {
      lang.setAttribute('lang', 'pt-br');
    } else {
      lang.setAttribute('lang', 'en');
    }
  }

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'Pt'){
        afficher(pt_txt, nb_pt);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(pt_txt, nb_pt);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(portuguese,english);
}
init();