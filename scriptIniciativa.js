const botao = document.getElementById("botaoSalvar");
const form = document.getElementById("form")
let listaAtual = [];
const botaoLimpar = document.getElementById("botaoLimpar")

botaoLimpar.addEventListener("click", async function(){
    const response = await fetch("https://projeto-dnd.onrender.com/iniciativa/deleta", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'POST'
    })
    
    organizaIniciativa(await response.json())
})

document.addEventListener("DOMContentLoaded", async function(){
    const response2 = await fetch("https://projeto-dnd.onrender.com/iniciativa", {
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
            const response = await fetch("https://projeto-dnd.onrender.com/iniciativa", {
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
            console.log(data)

            const response2 = await fetch("https://projeto-dnd.onrender.com/iniciativa", {
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
                <button onclick="moverCima(${index})">🔼</button>
                <button onclick="moverBaixo(${index})">🔽</button>
                <button onclick="deletaId(${index})">❌</button>
            
            `
            resultadoDiv.appendChild(newAtacante)   

        })
    }

    async function deletaId(id){
        const response = await fetch(`https://projeto-dnd.onrender.com/iniciativa/deletaIniciativa/${id}`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'PATCH'
        })
        const iniciativas = await response.json();
        organizaIniciativa(iniciativas)
    }

    async function atualizarHP(id){
        const hpInput = document.getElementById(`hp-${id}`);
        const novoHP = parseInt(hpInput.value);

        await fetch(`https://projeto-dnd.onrender.com/iniciativa/${id}`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            method: 'PATCH',
            body: JSON.stringify({
                hp: novoHP
            })
        })

        const response = await fetch("https://projeto-dnd.onrender.com/iniciativa");
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