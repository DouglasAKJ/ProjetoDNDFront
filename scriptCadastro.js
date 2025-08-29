const nome = document.getElementById("nomeUser")
const email = document.getElementById("emailUser")
const senha = document.getElementById("senhaUser")
const formCadastro = document.getElementById("formCadastro")
const formLogin = document.getElementById("formLogin")

formCadastro.addEventListener("submit", async function (e) {
    e.preventDefault(); // impede que o form recarregue a página

    const response = await fetch("https://06ba97efa663.ngrok-free.app/auth/cadastro", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nome.value,
            email: email.value,
            senha: senha.value
        })
    })

    if (response.ok) {
        const data = await response.json()
        const token = data.token
        sessionStorage.setItem("auth-token", token)
        window.location.href = "listaFichas.html";   
        form.reset();
    }  
    else {
        alert("Erro ao cadastrar usuário.");
        console.log(await response.text());
    }
});

