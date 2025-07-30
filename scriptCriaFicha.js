const token = sessionStorage.getItem("auth-token")
const nome = document.getElementById("nome")
const adicionaFicha = document.getElementById("adicionaFicha")
const criaFicha = document.getElementById("criaFichas")
const enviaFicha = document.getElementById("enviaFichaButton")
const formFicha = document.getElementById("form-ficha")
const sair = document.getElementById("sair")


sair.addEventListener("click", function(){
    window.location.href = "loginUsuario.html";
    sessionStorage.removeItem("auth-token")
})


document.addEventListener("DOMContentLoaded", async function(){
    if (!token){
        window.location.href = "loginUsuario.html"
    }
    const response = await fetch("https://projetodnd.duckdns.org/usuarios/returnUsuario", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET'
        
    })

    if(response.ok){
        

    } else {
        console.log(response.status)
    }
})


document.addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://projetodnd.duckdns.org/usuarios/returnFichas", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET'
        
    })

    if(response.ok){
        const fichas = await response.json();
        if(fichas.length === 0){

        } else {
            mostraFichas(fichas)
        }

    } else {
        console.log(response.status)
    }
})

criaFicha.addEventListener("click", function(){
    formFicha.style.display = "block"
})

enviaFicha.addEventListener("click", async function(){
    const nome = document.getElementById("nome")
    const classe = document.getElementById("classe")

    const response = await fetch("https://projetodnd.duckdns.org/ficha/criaficha", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify ({
            nome: nome.value,
            classe: classe.value
        })
    })

    const response2 = await fetch("https://projetodnd.duckdns.org/usuarios/returnFichas", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "GET"
    })
    if(response2.ok){
        const fichas = await response2.json()
        mostraFichas(fichas)
    } else {
        alert("Erro ", response.status)
    }

    formFicha.style.display = "none"
    nome.value = ""
    classe.value = ""

})

function mostraFichas(fichas){
    adicionaFicha.innerHTML = ""

    fichas.forEach(ficha => {
        const fichaElement = document.createElement("div")
        fichaElement.classList.add("ficha");
        fichaElement.innerHTML = `
            <button id="acessaFicha" onclick="acessaFicha(${ficha.id})">
            <div>
            <h3>Nome: ${ficha.nome} </h3>
            <h3>Classe: ${ficha.classe} </h3>
            <h3>Nível: ${ficha.level} </h3>
            </div>
            </button id="acessaFicha">
            <br>
            <button id="apagaFicha" onclick"apagaFicha(${ficha.id})">Deletar Ficha</button>
        `
        adicionaFicha.appendChild(fichaElement)
    });
}

async function apagaFicha(id){
    const response = await fetch(`https://projetodnd.duckdns.org/ficha/${id}`, {
         headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })

    console.log("deletado ficha " + id)

    const ficha = await response.json()

    const response2 = await fetch("https://projetodnd.duckdns.org/usuarios/deletaFicha",{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: ficha
    })

    const fichas = await response2.json()
    mostraFichas(fichas)
    

}

async function acessaFicha(id){
    sessionStorage.setItem("id-ficha", id)
    window.location.href = "index.html"
}