var mail = false;

// function qui vide le champ input quand on click dessus
function saisie(txt, id_controle){
    if(document.getElementById(id_controle).value==txt){
        document.getElementById(id_controle).value='';
        
    }
}
// fonction qui remet la valeur (tapez votre email, tapez votre mot de passe ...) dans le champ de l'input
function retablir(txt, id_controle) {
    if(document.getElementById(id_controle).value==''){
        document.getElementById(id_controle).value=txt;
        
    }
}

// function qui verifie si l'email est conforme
function controle(txt, id_controle) {
    var longueur = document.getElementById(id_controle).value.length;
    
    if (id_controle=="email") {
        if (document.getElementById(id_controle).value.indexOf('@')==-1 || document.getElementById(id_controle).value.indexOf('.')== -1 ) {
            document.getElementById(id_controle).style.border='blue 2px solid';
            document.getElementById("message").classList.add("alert", "alert-danger");
            document.getElementById("message").textContent = "Votre mail ne semble pas correct";

            mail = false;
        }
        else{
            
            document.getElementById(id_controle).style.border='#ffffff 2px solid';
            mail = true;
        }
    }
}

// Function qui va recupere les identifiants et les envoyer à l'API

function envoyer(){
    if (mail == true) {

       
        let email = document.getElementById('email').value
        let mdp = document.getElementById('mdp').value;
        let url = 'https://simplonews.brianboudrioux.fr/users/login';
        let user = {
                "email": `${email}`,
                "password": `${mdp}`,
            }
        

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
        document.getElementById("message").classList.add("alert", "alert-danger");
        document.getElementById("message").textContent = "Identifiant manquant";
    }
}

// function qui va generer le retour de l'API
// s'il y a un probleme => connexion non etablie => message d'erreur
// si la connexion est etablie, on cree un localStorage (ou un cookie) qui va contenir le token(retourner par l'API) et on redirige l'utilisateur vers la page articles.html

function generateUser(users){
    if (users.token == null ){

        
        document.getElementById("message").classList.add("alert", "alert-danger");
        document.getElementById("message").textContent = "Vous n'êtes pas inscrit."
    } else{ 
        // let cookieUser = document.cookie = `token=${users.token}; max-age=86000`;
        let storageUser = localStorage.setItem('token', `${users.token}`);
        location.href = "articles.html";
    }
}


// Partie inscription

function addNewUser(){

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('Email').value
    let mdp = document.getElementById('Mdp').value;
    let url = 'https://simplonews.brianboudrioux.fr/users';
    let user = {
        "firstName": `${firstName}`,
        "lastName": `${lastName}`,
        "email": `${email}`,
        "password": `${mdp}`,
    }
    let fetch_config = {
        method: 'POST',
        body: JSON.stringify(user),
        headers : {"Content-Type": "application/json"}
    }

    fetch(url, fetch_config)
    .then(response => response.json()
    .then(users => {
            connexion(users)
        }));
}

function connexion(users){
    if (users.user == null){
        document.getElementById("message").classList.add("alert", "alert-danger");
        document.getElementById("message").textContent = "Probleme d'inscription " + users.error;
    }
    else {
        document.getElementById("message").classList.add("alert", "alert-success");
        document.getElementById("message").textContent = "Inscription reussi !";
    }
}

// Fonction qui affiche le formulaire d'inscription

function openInscription(){
  document.querySelector("#sec_inscription").style.visibility="visible";
}

// Fonction qui cache le formulaire d'inscription
function closeInscription(){
    document.querySelector("#sec_inscription").style.visibility="hidden";

}


