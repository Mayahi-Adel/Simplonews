
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwiZW1haWwiOiJ0ZXN0QHRlc3QuZnIiLCJwYXNzd29yZCI6IiQyYiQxMCRyWGt5d05oZm9CVlM0ZVp1RThsQ2JlZlpNRi53YzgzZ3g5Ry9oWldpYkpCTy9Xc3kzY2NnZSIsImNyZWF0ZWRBdCI6IjIwMjEtMDItMDdUMDE6MTE6MTQuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDdUMDE6MTE6MTQuMDAwWiIsImlhdCI6MTYxMjg4MDM3OH0.tPd_-Npqd1JlKvH5CUPROGvvbdqcsx5r1crJmoiBA0c"


function articlesRecover(token){
    let url = 'https://simplonews.brianboudrioux.fr/articles';
    fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
    }).then(response => response.json().then(data => console.log(data)));
}

function userConnexion(){
    let url = 'https://simplonews.brianboudrioux.fr/users/login';
    let user = {
        "email": "test@test.fr",
        "password": "test1234",
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json().then(user => console.log(user)));
}

userConnexion();


