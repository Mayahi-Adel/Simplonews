// console.log(cookieUser);

function getArticles() {
    let token = document.cookie;
    if (token == null) {
        location.href = "index.html";
    }
    else {
        let url = "https://simplonews.brianboudrioux.fr/articles";
        let fetch_config = {
            method : "GET",
            headers : {
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + token.split("=")[1] 
            }
            
        }
        fetch (url, fetch_config)
        .then (response => response.json().then(articles => {
            generateArticles(articles);
        }))
    }
}

function generateArticles(data) {
    let first_article = document.querySelector("#first_article");
    
    first_article.innerHTML = `
        <a href="details.html">
            <figure>
            <img src="${data.articles[0].img}" alt="" >
            <figcaption>
            <h3>${data.articles[0].title}</h3>
            <p>${data.articles[0].resume.substr(0,120)}... </p>
             </figcaption>
             </figure>
        </a>`


    let list_products =  document.querySelector("#list_products")
    ;
    let concat = "";



    for (let i=1; i < data.articles.length; i++) {
        concat += `
        <a href="details.html">
            <figure>
            <img src="${data.articles[i].img}" alt="" >
            <figcaption>
            <h3>${data.articles[i].title}</h3>
            <p>${data.articles[i].resume.substr(0,120)}... </p>
             </figcaption>
             </figure>
        </a>`;
        
    }
    list_products.innerHTML = concat;
}

getArticles();