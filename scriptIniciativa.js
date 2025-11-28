const botao = document.getElementById("botaoSalvar");
const form = document.getElementById("form")
let listaAtual = [];
const botaoLimpar = document.getElementById("botaoLimpar")
const botaoVoltar = document.getElementById("voltar")

botaoVoltar.addEventListener("click", function(){
    window.location.href = "loginUsuario.html"
})

botaoLimpar.addEventListener("click", async function(){
    const response = await fetch("http://localhost:8080/iniciativa/deleta", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'POST'
    })
    
    organizaIniciativa(await response.json())
})

document.addEventListener("DOMContentLoaded", async function(){
    const response2 = await fetch("http://localhost:8080/iniciativa", {
                headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'GET'
            })

            const iniciativas = await response2.json();
            if (iniciativas.length != 0){
                organizaIniciativa(iniciativas)
            }
})

form.addEventListener("submit", async function(e){
            e.preventDefault()
            const nome = document.getElementById("nome").value;
            const iniciativa = document.getElementById("iniciativa").value;
            const hp = document.getElementById("hp").value;
            const response = await fetch("http://localhost:8080/iniciativa", {
                headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                iniciativa: iniciativa,
                hp: hp
            }
            )
            })

            const data = await response.json()

            const response2 = await fetch("http://localhost:8080/iniciativa", {
                headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'GET'
            })

            const iniciativas = await response2.json();
            //console.log(data2)
            organizaIniciativa(iniciativas)
            
        })

    function organizaIniciativa(arrayIniciativa){
        arrayIniciativa.sort((a,b) => b.iniciativa - a.iniciativa)
        listaAtual = arrayIniciativa;

        const resultadoDiv = document.getElementById("resultado")

        resultadoDiv.innerHTML = ""

        listaAtual.forEach((atacante, index) => {
            const newAtacante = document.createElement("div")
            newAtacante.innerHTML = `
                ${atacante.nome}:
                Iniciativa: <span id="inic-${atacante.id}">${atacante.iniciativa}</span> / 
                HP: <input type="number" class="input-hp" id="hp-${atacante.id}" value="${atacante.hp}" ">
                <button onclick="atualizarHP(${atacante.id})">Salvar HP</button>
                <a style="cursor: pointer" onclick="moverCima(${index})"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg></a>
                <a style="cursor: pointer" onclick="moverBaixo(${index})"> <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg> </a>
                <button onclick="deletaId(${atacante.id})">❌</button>
            
            `
            resultadoDiv.appendChild(newAtacante)   

        })
    }

    async function deletaId(id){
        const response = await fetch(`http://localhost:8080/iniciativa/deletaIniciativa/${id}`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'POST'
        })
        const iniciativas = await response.json();
        organizaIniciativa(iniciativas)
    }

    async function atualizarHP(id){
        const hpInput = document.getElementById(`hp-${id}`);
        const novoHP = parseInt(hpInput.value);

        await fetch(`http://localhost:8080/iniciativa/${id}`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'PATCH',
            body: JSON.stringify({
                hp: novoHP
            })
        })

        const response = await fetch("http://localhost:8080/iniciativa");
        const iniciativas = await response.json();
        organizaIniciativa(iniciativas);
    }

    function moverCima(index){
        if (index === 0) return;
        [listaAtual[index - 1], listaAtual[index]] = [listaAtual[index], listaAtual[index - 1]];
        organizaIniciativa(listaAtual);
    }

    function moverBaixo(index){
        if (index === listaAtual.length - 1) return;
        [listaAtual[index], listaAtual[index + 1]] = [listaAtual[index + 1], listaAtual[index]];
        organizaIniciativa(listaAtual)
    }