const email = document.getElementById("emailUser")
const senha = document.getElementById("senhaUser")
const formLogin = document.getElementById("formLogin")


formLogin.addEventListener("submit", async function(e){
    e.preventDefault()

    const response = await fetch(`http://localhost:8080/auth/login`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            senha: senha.value
        })
    })

    if(response.ok){
        alert("Login deu certo!")
        const data = await response.json();
        const token = data.token;
        sessionStorage.setItem("auth-token", token)
        window.location.href = "listaFichas.html";
        
    } else {
        console.log(await response.text())
    }
})
