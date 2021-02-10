// var mail = false;



// function saisie(txt, id_controle) {
//     if (document.getElementById(id_controle).value == txt) {
//         document.getElementById(id_controle).value = '';
//     }
// }
// function retablir(txt, id_controle) {
//     if (document.getElementById(id_controle).value == '') {
//         document.getElementById(id_controle).value = txt;
//     }
// }
// function controle(txt, id_controle) {

//     if (id_controle == "email") {
//         if (document.getElementById(id_controle).value.indexOf('@')==-1 || document.getElementById(id_controle).value.indexOf('.')==-1 )
//  {
//             document.getElementById(id_controle).style.border = 'blue 2px solid';
//             document.getElementById("message").innerText = "Votre mail ne semble pas correct";
//             mail = false;
//         }
//         else {
//             document.getElementById("message").innerText = "";
//             document.getElementById(id_controle).style.border = '#ffffff 2px solid';
//             mail = true;
//         }
//     }
// }
// function envoyer() {
//     if (mail == true) {
//         console.log(document.getElementById('email').value);
        
//     }
//     else {
//         document.getElementById("message").innerText = "Identifiant manquant";
        
//     }
// }

var mail = false;




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
            console.log(document.getElementById("email").value);
            mail = true;
        }
    }
}















function envoyer(){
    if (mail == true) {
        let email = document.getElementById('email').value
        let mdp = document.getElementById('mdp').value;
        let url = 'https://simplonews.brianboudrioux.fr/users/login';
        let user = {
        "email": `${email}`,
        "password": `${mdp}`,
    }
    console.log(user);
    let fetch_config = {
        method: 'POST',
        body: JSON.stringify(user),
        headers : {"Content-Type": "application/json"}
    }


    fetch(url, fetch_config)
    .then(response => response.json()
    .then(users => {
        generateUser(users)
    }));
    
    }
    else{
        document.getElementById("message").innerText = "Identifiant manquant";
    }
}
function generateUser(users){
    if (users.token == null ){
        document.getElementById("message").innerText = "Vous n'êtes pas inscrit."
    }else{
        let cookieUser = document.cookie = `token=${users.token}; max-age=86000`;
        location.href = "articles.html";
    }
}

