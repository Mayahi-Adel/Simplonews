function getCategories() {
    let url = "https://simplonews.brianboudrioux.fr/categories";
    let token = localStorage.getItem('token');

    if (!token) {
        location.href = "index.html";
    }
    else {
        let fetch_config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        fetch (url,fetch_config).then(response => response.json().then(data => {
                var arrayCategories = [];
                for (let i = 0; i < data.categories.length;i++) {
                    arrayCategories.push(data.categories[i])
                }
            

        })) 
    }

}
getCategories ();






