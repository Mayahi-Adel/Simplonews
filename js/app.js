
// Function connexion utilisateur
// Cette fonction permet d'envoyer, avec la methode POST, l'email et le mot de passe de l'utilisateur vers l'API
// Si l'utilisateur existe on aura un token comme retour



function userConnexion(){
    let url = 'https://simplonews.brianboudrioux.fr/users/login';
    let user = {
        "email": "test@test.fr",
        "password": "test1234",
    };

    let fetch_config = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }

    fetch(url, fetch_config).then(response => response.json().then(user => {
        generateUser(user)
    }));
}

// Cette fonction va gerer le token renvoyé de l'API une fois la connexion est valide
// une fois connectée, on recupere le token et on le place dans un cookie.
// tant que ce cookie existe, on est bien connecté, et on peut acceder à la liste des articles

function generateUser(u){

    if (u.token == null){
        //redirection vers la page de connexion
        // connexion non etablie
        console.log(u.error)
    }
    else {
        // On est bien connecté
        let token = u.token;
    
        // Creation de cookie
        var cookie_cnx = document.cookie = `token = ${token}; max-age=86400; sdsfsdf`;
    
    }

}

 userConnexion();


// function pour recuperer la listes des articles

function articlesRecover(){

    // recuperation du cookie qui contient le token
    // A verifier !!
    let cookie_cnx = document.cookie;
     

    if (cookie_cnx.split("; ").find(row => row.startsWith("token")).split("=")[1] != null){

        let token = cookie_cnx.split("; ").find(row => row.startsWith("token")).split("=")[1];
        let url = 'https://simplonews.brianboudrioux.fr/articles';
        let fetch_config = {
            method: 'GET',
            headers: {
            //   'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            }
        }


            fetch(url, fetch_config)
            .then(response => response.json().then(data => {
            generateArticles(data)
        }));
    }

}

function generateArticles(data){
   console.log(data.articles[0]);
}

articlesRecover();


// Function ajout utlisateur

function addUser(){
    let url = 'https://simplonews.brianboudrioux.fr/users';
    let user = {
        "firstName": "Adel",
        "lastName": "Test",
        "email": "user12@test.com",
        "password": "azerty",
    };

    let fetch_config = {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8"}
    };

    fetch (url, fetch_config)
    .then(response => {
        if (response.status == 403){
            console.log("erreur authentification");
        }
        else if (response.status == 400){
            console.log("erreur données requetes");
        }
        else {
            console.log('succes')
        }
    })
    .catch(errors => console.log(errors))
}
