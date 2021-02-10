var mail = false;
var mp=false;

function envoyer(){
    if (mail == true && mp == true) {
        document.getElementById("message").innerText = "Envoi serveur";
        // document.getElementById("identifiant").submit();
    }
    else{
        document.getElementById("message").innerText = "Identifiant manquant";
    }
}

function saisie(txt, id_controle){
    if(document.getElementById(id_controle).value==txt){
        document.getElementById(id_controle).value='';
    }
}
function retablir(txt, id_controle) {
    if(document.getElementById(id_controle).value==''){
        document.getElementById(id_controle).value=txt;
    }
}
function controle(txt, id_controle) {
    var longueur = document.getElementById(id_controle).value.length;
    
    if (id_controle=="email") {
        if (document.getElementById(id_controle).value.indexOf('@')==-1 || document.getElementById(id_controle).value.indexOf('.')==-1 ) {
            document.getElementById(id_controle).style.border='blue 2px solid';
            document.getElementById("message").innerText = "Votre mail ne semble pas correct";
            mail = false;
        }
        else{
            document.getElementById("message").innerText = "";
            document.getElementById(id_controle).style.border='#ffffff 2px solid';
            mail = true;
        }
    }
}