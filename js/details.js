function getDetailsArticle() {
    
    let token = localStorage.getItem('token');
    
    if (!token) {
        location.href = "index.html";
    }
    else {
        let url = "https://simplonews.brianboudrioux.fr/articles";
        let fetch_config = {
            method : "GET",
            headers : {
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + token 
            }
            
        }
        fetch (url, fetch_config)
        .then (response => response.json().then(articles => {
            generateDetailArticle(articles);
        }));
    }

}

function generateDetailArticle(articles){


    let contentTitle = document.querySelector(".contentTitle");
    let titlecontain = document.querySelector(".titles > h2");
    let contentArticle = document.querySelector(".contentArticle");

    let str = window.location.href;
    let url = new URL(str);
    var id = url.searchParams.get("id");


    for (let i=0; i< articles.articles.length; i++){
        
        if (articles.articles[i].id == id){
            
            var title = articles.articles[i].title;
            var content = articles.articles[i].content;
            var img = articles.articles[i].img;
            var author = articles.articles[i].author;
        }
    }
    
    titlecontain.textContent = `${title}`;
    contentTitle.style.backgroundImage = `url('${img}')`;

    contentArticle.innerHTML = `
        <article>
            <p id="chapeau">${content}</p>
            
            <div class="contentAuthor">
                <p id="author">${author}</p>
            </div>
        
        </article>
    `
}

getDetailsArticle();

// distruction du localStorage => deconnexion
function distroy_cnx(){
    localStorage.removeItem('token');
    location.href = "index.html";
}
