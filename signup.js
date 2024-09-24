document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let obj = {
        username: username,
        email: email,
        password: password
    }

    fetch(`http://localhost:3000/users`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            window.location.href = "login.html";
            alert("sign up");
            console.log(res);
        }).catch((err) => {
            console.log(err)
        })
})

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let obj = {
        username: username,
        email: email,
        password: password
    }

    fetch(`http://localhost:3000/users`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            window.location.href = "login.html";
            alert("sign up");
            console.log(res);
        }).catch((err) => {
            console.log(err)
        })
})
