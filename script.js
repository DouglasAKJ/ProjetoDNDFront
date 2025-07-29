//nomePlayer
const nomePlayer = document.getElementById("nomePlayer")

//token
const token = sessionStorage.getItem("auth-token")

//id
const id = sessionStorage.getItem("id-ficha")

//misc
const botao = document.getElementById("botao");
const content = document.getElementById("content");
const body = document.getElementsByTagName("body");

//inputs
const inputAtributo = document.getElementsByName("atributo");
const nomeChar = document.getElementById("nomeChar")
const classe = document.getElementById("classe")
const classeArmadura = document.getElementById("ca")
const deslocamento = document.getElementById("deslocamento")
const raca = document.getElementById("raca")

//botoes
const botaoCombat = document.getElementById("combat-btn");
const botaoSpell = document.getElementById("spell-btn");
const botaoAbout = document.getElementById("about-btn");
const botaoInv = document.getElementById("inv-btn");
const addBotao = document.getElementById("add-botao");
const addSpell = document.getElementById("add-spell");
const botaoDelete = document.getElementById("botaoDelete");
const botaoFicha = document.getElementById("botaoFicha");
const botaoVoltar = document.getElementById("voltar")

//nav
const navCombat = document.getElementById("nav-ataque2");
const navCombat2 = document.getElementById("nav-ataque");
const navSpell = document.getElementById("nav-spells");
const navInv = document.getElementById("nav-inventario");

//spells
const nineSpell = document.getElementById("level9");
const eightSpell = document.getElementById("level8");
const sevenSpell = document.getElementById("level7");
const sixSpell = document.getElementById("level6");
const fiveSpell = document.getElementById("level5");
const fourSpell = document.getElementById("level4");
const threeSpell = document.getElementById("level3");
const twoSpell = document.getElementById("level2");
const oneSpell = document.getElementById("level1");
const cantripSpell = document.getElementById("truques");

//atributos
const dexAtributo = document.getElementById("destreza");
const consAtributo = document.getElementById("constituicao");
const forcaAtributo = document.getElementById("forca");
const intAtributo = document.getElementById("inteligencia");
const carismaAtributo = document.getElementById("carisma");
const sabAtributo = document.getElementById("sabedoria");

//mods
const dexMod = document.getElementById("destrezaMod");
const consMod = document.getElementById("constituicaoMod");
const forcaMod = document.getElementById("forcaMod");
const intMod = document.getElementById("inteligenciaMod");
const carismaMod = document.getElementById("carismaMod");
const sabMod = document.getElementById("sabedoriaMod");

//outros
const iniciativa = document.getElementById("iniciativa");
const proficiencia = document.getElementById("proficiencia");
const nivel = document.getElementById("nivel");

//pericias
const acrobacia = document.getElementById("acrobacia");
const arcanismo = document.getElementById("arcanismo");
const atletismo = document.getElementById("atletismo");
const atuacao = document.getElementById("atuacao");
const engancao = document.getElementById("enganacao");
const furtividade = document.getElementById("furtividade");
const historia = document.getElementById("historia");
const intimidacao = document.getElementById("intimidacao");
const intuicao = document.getElementById("intuicao");
const investigacao = document.getElementById("investigacao");
const lidarAnimais = document.getElementById("lidaranimais");
const medicina = document.getElementById("medicina");
const natureza = document.getElementById("natureza");
const percepcao = document.getElementById("percepcao");
const persuasao = document.getElementById("persuasao");
const prestidigitacao = document.getElementById("prestidigitacao");
const religiao = document.getElementById("religiao");
const sobrevivencia = document.getElementById("sobrevivencia");

// prof pericias
const acrobaciaProf = document.getElementById("acrobaciaProf")
const arcanismoProf = document.getElementById("arcanismoProf")
const atletismoProf = document.getElementById("atletismoProf")
const atuacaoProf = document.getElementById("atuacaoProf")
const enganacaoProf = document.getElementById("enganacaoProf")
const furtividadeProf = document.getElementById("furtividadeProf")
const historiaProf = document.getElementById("historiaProf")
const intimidacaoProf = document.getElementById("intimidacaoProf")
const intuicaoProf = document.getElementById("intuicaoProf")
const investigacaoProf = document.getElementById("investigacaoProf")
const lidaranimaisProf = document.getElementById("lidaranimaisProf")
const medicinaProf = document.getElementById("medicinaProf")
const naturezaProf = document.getElementById("naturezaProf")
const percepcaoProf = document.getElementById("percepcaoProf")
const persuasaoProf = document.getElementById("persuasaoProf")
const prestidigitacaoProf = document.getElementById("prestidigitacaoProf")
const religiaoProf = document.getElementById("religiaoProf")
const sobrevivenciaProf = document.getElementById("sobrevivenciaProf")

//salva guardas

const forcaSave = document.getElementById("forcaSave");
const consSave = document.getElementById("consSave");
const dexSave = document.getElementById("dexSave");
const intSave = document.getElementById("intSave");
const sabSave = document.getElementById("sabSave");
const carismaSave = document.getElementById("carismaSave");

//check prof salva guarda
const forcaCheck = document.getElementById("forcaCheck")
const dexCheck = document.getElementById("dexCheck")
const consCheck = document.getElementById("consCheck")
const intCheck = document.getElementById("intCheck")
const sabCheck = document.getElementById("sabCheck")
const carCheck = document.getElementById("carCheck")  

//hp
const hpAtual = document.getElementById("hpAtual") 
const hpMax = document.getElementById("hpMax")
const hpTemp = document.getElementById("hpTemp");

//botoes de dano e cura
const dano = document.getElementById("dano")
const cura = document.getElementById("cura")
const vidaAltera = document.getElementById("vidaAltera")

//cd magia
const cdMagia = document.getElementById("cdMagia");

//firulas
const aparencia = document.getElementById("ideais")
const idiomas = document.getElementById("vinculos")
const background = document.getElementById("fraquezas")
const carateristicas = document.getElementById("caracteristicas")

const selectSpell = document.getElementById("selectSpell")

raca.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080//ficha/raca/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        raca: raca.value
      })
    })
    const data = await response.json()
    raca.value = data.raca

})

aparencia.addEventListener("change", async function(){
    const response = await fetch(`http://177.153.20.221:8080/ficha/aparencia/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        aparencia: aparencia.value
      })
    })

    const data = await response.json();
    aparencia.value = data.aparencia
})

idiomas.addEventListener("change", async function(){
    const response = await fetch(`http://177.153.20.221:8080/ficha/idiomas/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        idiomas: idiomas.value
      })
    })

    const data = await response.json();
    idiomas.value = data.idiomas
})

background.addEventListener("change", async function(){
    const response = await fetch(`http://177.153.20.221:8080/ficha/background/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        background: background.value
      })
    })

    const data = await response.json();
    background.value = data.background
})

carateristicas.addEventListener("change", async function(){
    const response = await fetch(`http://177.153.20.221:8080/ficha/caracteristicas/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        caracteristicas: carateristicas.value
      })
    })

    const data = await response.json();
    carateristicas.value = data.caracteristicas
})


selectSpell.addEventListener("change", async function(){
  const selected = selectSpell.value;

  if (!selected) return;

  const res = await fetch(`https://www.dnd5eapi.co/api/2014/spells/${selected}`, {
    headers: {
      'Accept': 'application/json'
    }

  });

  const spell = await res.json()

  document.getElementById("castingTime").value = spell.casting_time
  document.getElementById("range").value = spell.range
  document.getElementById("desc").value = spell.desc
  document.getElementById("levelSpell").value = spell.level
})

async function salvarCantrip(){
  const select = document.getElementById("selectSpell")
  const nome = select.options[select.selectedIndex].text;
  const index = select.value;
  const time = document.getElementById("castingTime").value
  const range = document.getElementById("range").value
  const desc = document.getElementById("desc").value
  const nivel = document.getElementById("levelSpell").value

  if(!index || !nome){
    alert("Selecione um truque");
    return;
  }

  const save = await fetch(`http://177.153.20.221:8080/ficha/adicionaSpell/${id}`, {
         headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        desc: desc,
        time: time,
        range: range,
        nivel: nivel
      })


    })

    adicionarTruqueNaFicha(nome, desc, time, range, nivel)

    fecharModal()

}

function adicionarTruqueNaFicha(nome, desc, time, range, nivel) {
  let div;
  let spell = document.createElement("div")

  nivel = parseInt(nivel)
  switch(nivel){
    case 0:
      div = document.getElementById("truques");
      break;
    case 1:
      div = document.getElementById("level1");
      break;
    case 2:
      div = document.getElementById("level2");
      break;
    case 3:
      div = document.getElementById("level3");
      break;
    case 4:
      div = document.getElementById("level4");
      break;
    case 5:
      div = document.getElementById("level5");
      break;
    case 6:
      div = document.getElementById("level6");
      break;
    case 7:
      div = document.getElementById("level7");
      break;
    case 8:
      div = document.getElementById("level8");
      break;
    case 9:
      div = document.getElementById("level9");
      break;
    default:
      console.warn("NIvel não mapeado")
      return;
  }
  

  

  spell.innerHTML = `<button>
      <span class="truque-nome" style="cursor:pointer;" onclick="mostrarDetalhes('${nome}', \`${desc}\`, '${time}', '${range}')">${nome}</span>
    </button>
    <button class="btn-excluir">Excluir Spell</button>
  `;

  spell.querySelector(".btn-excluir").addEventListener("click", function(){
    excluiSpell(nome, desc, time, range, nivel, spell)
  })

  div.appendChild(spell);
}

async function excluiSpell(nome, desc, time, range, nivel, elementoHTML){
  const response = await fetch(`http://177.153.20.221:8080/ficha/deletaSpell/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        desc: desc,
        range: range,
        time: time,
        nivel: nivel
      })
    })

    if(response.ok){
      elementoHTML.remove()
    } 

}

function mostrarDetalhes(nome, desc, time, range){
  abrirModal()
  document.getElementById("selectSpell").innerHTML = `<option>${nome}</option>`
  document.getElementById("castingTime").value = time
  document.getElementById("range").value = range
  document.getElementById("desc").value = desc
}

async function abrirModal(nivel){
  const modal = document.getElementById("modal")
  modal.classList.add("open")
  const select = document.getElementById("selectSpell");
  select.innerHTML = `<option value =""> Selecione um spell </option>`
   document.getElementById("castingTime").value = ""
  document.getElementById("range").value = ""
  document.getElementById("desc").value = ""
  document.getElementById("levelSpell").value = ""

  const magias = await fetch("https://www.dnd5eapi.co/api/2014/spells", {
      headers: {
        'Accept': 'application/json'
      }
    }) 

    magiaEscolhida = await magias.json();
    spells = magiaEscolhida.results

    spells.forEach(async spell => {
      if(spell.level == nivel){
      const option = document.createElement("option");
      option.value = spell.index
      option.textContent = spell.name
      select.appendChild(option);
        
      }
      
    })



  
}

function fecharModal(){
  document.getElementById("modal").classList.remove("open")
}


botaoVoltar.addEventListener("click", function(){
  window.location.href = "listaFichas.html"
})

  async function addAtaque(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/adicionaAtaque/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  const data = await response.json();
  const index = data.ataques.length + 1;
  const atkId = `atkDiv${index}`;

  const newAtk = document.createElement("div");
  newAtk.classList.add("linha");
  newAtk.id = atkId;

  newAtk.innerHTML = `
    <input type="text" id="nomeAtaque${index}" placeholder="nome">
    <input type="text" id="bonusAtaque${index}" placeholder="bonus" style="width: 40px;">
    <input type="text" id="danoAtaque${index}" placeholder="dano" style="width: 100px;">
    <button type="button" id="saveButton${index}">Salvar</button>
    <button type="button" id="deleteButton${index}">❌</button>
  `;

  navCombat2.appendChild(newAtk);

  // Botão de salvar
  document.getElementById(`saveButton${index}`).addEventListener("click", async function () {
    const nome = document.getElementById(`nomeAtaque${index}`).value;
    const bonus = document.getElementById(`bonusAtaque${index}`).value;
    const dano = document.getElementById(`danoAtaque${index}`).value;

    const res = await fetch(`http://177.153.20.221:8080/ficha/adicionaAtaque/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        bonus: bonus,
        dano: dano
      })
    });

    const result = await res.json();
    console.log("Ataque salvo:", result);
  });

  // Botão de excluir (remove do DOM)
  document.getElementById(`deleteButton${index}`).addEventListener("click", function () {
    const nome = document.getElementById(`nomeAtaque${index}`).value;
    const bonus = document.getElementById(`bonusAtaque${index}`).value;
    const dano = document.getElementById(`danoAtaque${index}`).value;
    document.getElementById(atkId).remove();
    excluiAtaque(nome, bonus, dano, newAtk)

    // Aqui você pode opcionalmente chamar o backend para remover o ataque do banco, por exemplo:
    // excluiAtaque(nome, bonus, dano);
  });
}


  async function excluiAtaque(nome, bonus, dano, elementoHTML){
  const response = await fetch(`http://177.153.20.221:8080/ficha/deletaAtaque/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        dano: dano,
        bonus: bonus
      })
    })

    if(response.ok){
      elementoHTML.remove()
    } 

}

  

  

  botaoCombat.addEventListener('click', () => {
    navCombat.style.display = "initial";
    navSpell.style.display = "none";
    navInv.style.display = "none";
  })

  botaoSpell.addEventListener('click', () => {
    navSpell.style.display = "initial";
    navCombat.style.display = "none";
    navInv.style.display = "none";
  })

  botaoInv.addEventListener('click', () => {
    navSpell.style.display = "none";
    navCombat.style.display = "none";
    navInv.style.display = "flex";
  })

acrobaciaProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profAcrobacia/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    acrobacia.value = data.pericias.find(p => p.nome === "Acrobacia").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profAcrobacia/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    acrobacia.value = data.pericias.find(p => p.nome === "Acrobacia").valor
  }
})

arcanismoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profArcanismo/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    arcanismo.value = data.pericias.find(p => p.nome === "Arcanismo").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profArcanismo/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    arcanismo.value = data.pericias.find(p => p.nome === "Arcanismo").valor
  }
})

atletismoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profAtletismo/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    atletismo.value = data.pericias.find(p => p.nome === "Atletismo").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profAtletismo/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    atletismo.value = data.pericias.find(p => p.nome === "Atletismo").valor
  }
})

atuacaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profAtuacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    atuacao.value = data.pericias.find(p => p.nome === "Atuação").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profAtuacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    atuacao.value = data.pericias.find(p => p.nome === "Atuação").valor
  }
})

enganacaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profEnganacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    engancao.value = data.pericias.find(p => p.nome === "Enganação").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profEnganacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    engancao.value = data.pericias.find(p => p.nome === "Enganação").valor
  }
})

furtividadeProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profFurtividade/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    furtividade.value = data.pericias.find(p => p.nome === "Furtividade").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profFurtividade/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    furtividade.value = data.pericias.find(p => p.nome === "Furtividade").valor
  }
})

historiaProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profHistoria/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    historia.value = data.pericias.find(p => p.nome === "História").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profHistoria/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    historia.value = data.pericias.find(p => p.nome === "História").valor
  }
})

intimidacaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profIntimidacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    intimidacao.value = data.pericias.find(p => p.nome === "Intimidação").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profIntimidacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    intimidacao.value = data.pericias.find(p => p.nome === "Intimidação").valor
  }
})

intuicaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profIntuicao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    intuicao.value = data.pericias.find(p => p.nome === "Intuição").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profIntuicao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    intuicao.value = data.pericias.find(p => p.nome === "Intuição").valor
  }
})

investigacaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profInvestigacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    investigacao.value = data.pericias.find(p => p.nome === "Investigação").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profInvestigacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    investigacao.value = data.pericias.find(p => p.nome === "Investigação").valor
  }
})

lidaranimaisProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profLidarAnimais/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    lidarAnimais.value = data.pericias.find(p => p.nome === "Lidar com Animais").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profLidarAnimais/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    lidarAnimais.value = data.pericias.find(p => p.nome === "Lidar com Animais").valor
  }
})

medicinaProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profMedicina/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    medicina.value = data.pericias.find(p => p.nome === "Medicina").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profMedicina/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    medicina.value = data.pericias.find(p => p.nome === "Medicina").valor
  }
})

naturezaProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profNatureza/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    natureza.value = data.pericias.find(p => p.nome === "Natureza").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profNatureza/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    natureza.value = data.pericias.find(p => p.nome === "Natureza").valor
  }
})

percepcaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profPercepcao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    percepcao.value = data.pericias.find(p => p.nome === "Percepção").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profPercepcao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    percepcao.value = data.pericias.find(p => p.nome === "Percepção").valor
  }
})

persuasaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profPersuasao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    persuasao.value = data.pericias.find(p => p.nome === "Persuasão").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profPersuasao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    persuasao.value = data.pericias.find(p => p.nome === "Persuasão").valor
  }
})

prestidigitacaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profPrestidigitacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    prestidigitacao.value = data.pericias.find(p => p.nome === "Prestidigição").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profPrestidigitacao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    prestidigitacao.value = data.pericias.find(p => p.nome === "Prestidigição").valor
  }
})

religiaoProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profReligiao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    religiao.value = data.pericias.find(p => p.nome === "Religião").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profReligiao/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    religiao.value = data.pericias.find(p => p.nome === "Religião").valor
  }
})

sobrevivenciaProf.addEventListener("change", async function(){
  if (this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profSobrevivencia/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(true)
    })

    data = await response.json()
    sobrevivencia.value = data.pericias.find(p => p.nome === "Sobrevivência").valor


  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profSobrevivencia/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(false)
    })

    data = await response.json()
    sobrevivencia.value = data.pericias.find(p => p.nome === "Sobrevivência").valor
  }
})

forcaCheck.addEventListener("change", async function(){
  if(this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profForca/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          forcaProf: true
        }
      })
    })
    const data = await response.json();
    forcaSave.value = data.atributos.forcaSave;
  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profForca/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          forcaProf: false
        }
      })
    })

    const data = await response.json() 
    forcaSave.value = data.atributos.forcaSave
  }
})

dexCheck.addEventListener("change", async function(){
  if(this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profDestreza/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          destrezaProf: true
        }
      })
    })
    const data = await response.json();
    dexSave.value = data.atributos.destrezaSave;
  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profDestreza/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          destrezaProf: false
        }
      })
    })

    const data = await response.json() 
    dexSave.value = data.atributos.destrezaSave
  }
})

intCheck.addEventListener("change", async function(){
  if(this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profInteligencia/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          inteligenciaProf: true
        }
      })
    })
    const data = await response.json();
    intSave.value = data.atributos.inteligenciaSave;
  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profInteligencia/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          inteligenciaProf: false
        }
      })
    })

    const data = await response.json() 
    intSave.value = data.atributos.inteligenciaSave
  }
})

consCheck.addEventListener("change", async function(){
  if(this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profCons/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          constituicaoProf: true
        }
      })
    })
    const data = await response.json();
    consSave.value = data.atributos.constituicaoSave;
  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profCons/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          constituicaoProf: false
        }
      })
    })

    const data = await response.json() 
    consSave.value = data.atributos.constituicaoSave
  }
})

sabCheck.addEventListener("change", async function(){
  if(this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profSabedoria/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          sabedoriaProf: true
        }
      })
    })
    const data = await response.json();
    sabSave.value = data.atributos.sabedoriaSave;
  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profSabedoria/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          sabedoriaProf: false
        }
      })
    })

    const data = await response.json() 
    sabSave.value = data.atributos.sabedoriaSave
  }
})

carCheck.addEventListener("change", async function(){
  if(this.checked){
    const response = await fetch(`http://177.153.20.221:8080/ficha/profCarisma/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          carismaProf: true
        }
      })
    })
    const data = await response.json();
    carismaSave.value = data.atributos.carismaSave;
  } else {
    const response = await fetch(`http://177.153.20.221:8080/ficha/profCarisma/${id}`, {
      headers:{
      'Authorization': `Bearer ${token}`, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        atributos: {
          carismaProf: false
        }
      })
    })

    const data = await response.json() 
    carismaSave.value = data.atributos.carismaSave
  }
})

classe.addEventListener("change", async function(){
  fetch(`http://177.153.20.221:8080/ficha/${id}`,
    {
      headers:
      {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      classe: classe.value
    })
    }
  ).then(res => res.json())
  .then(data => classe.value = data.classe)
})

nomeChar.addEventListener("change", async function(){
  fetch(`http://177.153.20.221:8080/ficha/${id}`,
    {
      headers:
      {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      nome: nomeChar.value
    })
    }
  ).then(res => res.json())
  .then(data => nomeChar.value = data.nome)
})

classeArmadura.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraCA/${id}`,
    {
      headers:
      {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      classeArmadura: classeArmadura.value
    })
    }
  )

  const data = await response.json()
  classeArmadura = data.classeArmadura
})

deslocamento.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraDeslocamento/${id}`,
    {
      headers:
      {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      deslocamento: deslocamento.value
    })
    }
  )

  const data = await response.json()
  deslocamento.value = data.deslocamento
})

nivel.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/${id}`,
    {
      headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      level: nivel.value
    })
    }
  )

  if(response.ok){
    const data = await response.json()
    proficiencia.value = data.proficiencia;
  forcaSave.value = data.atributos.forcaSave
  consSave.value = data.atributos.constituicaoSave 
  dexSave.value = data.atributos.destrezaSave 
  intSave.value = data.atributos.inteligenciaSave 
  sabSave.value = data.atributos.sabedoriaSave 
  carismaSave.value = data.atributos.carismaSave

  acrobacia.value = data.pericias.find(p => p.nome === "Acrobacia").valor
  arcanismo.value = data.pericias.find(p => p.nome === "Arcanismo").valor
  atletismo.value = data.pericias.find(p => p.nome === "Atletismo").valor
  atuacao.value = data.pericias.find(p => p.nome === "Atuação").valor
  engancao.value = data.pericias.find(p => p.nome === "Enganação").valor
  furtividade.value = data.pericias.find(p => p.nome === "Furtividade").valor
  historia.value = data.pericias.find(p => p.nome === "História").valor
  intimidacao.value = data.pericias.find(p => p.nome === "Intimidação").valor
  intuicao.value = data.pericias.find(p => p.nome === "Intuição").valor
  investigacao.value = data.pericias.find(p => p.nome === "Investigação").valor
  lidarAnimais.value = data.pericias.find(p => p.nome === "Lidar com Animais").valor
  medicina.value = data.pericias.find(p => p.nome === "Medicina").valor
  natureza.value = data.pericias.find(p => p.nome === "Natureza").valor
  percepcao.value = data.pericias.find(p => p.nome === "Percepção").valor
  persuasao.value = data.pericias.find(p => p.nome === "Persuasão").valor
  prestidigitacao.value = data.pericias.find(p => p.nome === "Prestidigição").valor
  religiao.value = data.pericias.find(p => p.nome === "Religião").valor
  sobrevivencia.value = data.pericias.find(p => p.nome === "Sobrevivência").valor

  
  }
}
)


cdMagia.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraCD/${id}`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({
      cdMagia: cdMagia.value
    })
  })

  const data = await response.json()
  cdMagia.value = data.cdMagia
})

hpAtual.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraHp/${id}`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({
      vida: hpAtual.value
    })
  })
  const data = await response.json()
  hpAtual.value = data.vida

})

hpMax.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraHpMax/${id}`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({
      vidaMax: hpMax.value
    })
  } 
  )

    const data = await response.json()
    hpMax.value = data.vidaMax
})

hpTemp.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraHpTemp/${id}`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({
      vidaTemp: hpTemp.value
    })
  } 
  )

    const data = await response.json()
    hpTemp.value = data.vidaTemp
})

dano.addEventListener("click", async function(){
  const valorDano = parseInt(vidaAltera.value)
  const response = await fetch(`http://177.153.20.221:8080/ficha/dano/${id}`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: valorDano
    
  } 
  )
  const data = await response.json()
  hpAtual.value = data.vida
})

cura.addEventListener("click", async function(){
  const valorCura = parseInt(vidaAltera.value)
  const response = await fetch(`http://177.153.20.221:8080/ficha/cura/${id}`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: valorCura
    
  } 
  )
  const data = await response.json()
  hpAtual.value = data.vida
})

function carregaAtaque(ataque, index){
  const atkId = `atkDiv${index}`;

  const newAtk = document.createElement("div");
  newAtk.classList.add("linha");
  newAtk.id = atkId;

  newAtk.innerHTML = `
    <input type="text" id="nomeAtaque${index}" value="${ataque.nome}" placeholder="nome">
    <input type="text" id="bonusAtaque${index}" value="${ataque.bonus}" placeholder="bonus" style="width: 40px;">
    <input type="text" id="danoAtaque${index}" value="${ataque.dano}" placeholder="dano" style="width: 100px;">
    <button type="button" id="saveButton${index}">Salvar</button>
    <button type="button" id="deleteButton${index}">❌</button>
  `;

  navCombat2.appendChild(newAtk);

  document.getElementById(`saveButton${index}`).addEventListener("click", async function () {
    const nome = document.getElementById(`nomeAtaque${index}`).value;
    const bonus = document.getElementById(`bonusAtaque${index}`).value;
    const dano = document.getElementById(`danoAtaque${index}`).value;

    const res = await fetch(`http://177.153.20.221:8080/ficha/adicionaAtaque/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ nome, bonus, dano })
    });

    const result = await res.json();
    console.log("Ataque atualizado:", result);
  });

  document.getElementById(`deleteButton${index}`).addEventListener("click", function () {
    const nome = document.getElementById(`nomeAtaque${index}`).value;
    const bonus = document.getElementById(`bonusAtaque${index}`).value;
    const dano = document.getElementById(`danoAtaque${index}`).value;
    document.getElementById(atkId).remove();
    excluiAtaque(nome, bonus, dano, newAtk)
    // Pode chamar aqui a exclusão no backend também
  });
}



document.addEventListener("DOMContentLoaded", async function(){
  if (!token){
        window.location.href = "loginUsuario.html"
    }
  const res = await fetch(`http://177.153.20.221:8080/usuarios/returnUsuario`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const data2 = await res.json();
  console.log(data2)
  nomePlayer.innerHTML = data2.nome;

 const response = await fetch(`http://177.153.20.221:8080/ficha/${id}`, {
    headers:
        {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  data = await response.json(); 

  nomeChar.value = data.nome
  classe.value = data.classe
  classeArmadura.value = `${JSON.stringify(data.classeArmadura)}`
  deslocamento.value = `${JSON.stringify(data.deslocamento)}`
  
  //atributos
  dexAtributo.value = `${JSON.stringify(data.atributos.destreza)}`
  forcaAtributo.value = `${JSON.stringify(data.atributos.forca)}`
  consAtributo.value = `${JSON.stringify(data.atributos.constituicao)}`
  carismaAtributo.value = `${JSON.stringify(data.atributos.carisma)}`
  sabAtributo.value = `${JSON.stringify(data.atributos.sabedoria)}`
  intAtributo.value = `${JSON.stringify(data.atributos.inteligencia)}`
  dexMod.value = `${JSON.stringify(data.atributos.destrezaMod)}`
  forcaMod.value = `${JSON.stringify(data.atributos.forcaMod)}`
  consMod.value = `${JSON.stringify(data.atributos.constituicaoMod)}`
  carismaMod.value = `${JSON.stringify(data.atributos.carismaMod)}`
  sabMod.value = `${JSON.stringify(data.atributos.sabedoriaMod)}`
  intMod.value = `${JSON.stringify(data.atributos.inteligenciaMod)}`
  iniciativa.value = `${JSON.stringify(data.iniciativa)}`

  //pericias 

  acrobacia.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Acrobacia").valor)}`
  arcanismo.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Arcanismo").valor)}`
  atletismo.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Atletismo").valor)}`
  atuacao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Atuação").valor)}`
  engancao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Enganação").valor)}`
  furtividade.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Furtividade").valor)}`
  historia.value = `${JSON.stringify(data.pericias.find(p => p.nome === "História").valor)}`
  intimidacao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Intimidação").valor)}`
  intuicao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Intuição").valor)}`
  investigacao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Investigação").valor)}`
  lidarAnimais.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Lidar com Animais").valor)}`
  medicina.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Medicina").valor)}`
  natureza.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Natureza").valor)}`
  percepcao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Percepção").valor)}`
  persuasao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Persuasão").valor)}`
  prestidigitacao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Prestidigição").valor)}`
  religiao.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Religião").valor)}`
  sobrevivencia.value = `${JSON.stringify(data.pericias.find(p => p.nome === "Sobrevivência").valor)}`

  //salva guardas
  forcaSave.value = data.atributos.forcaSave
  consSave.value = data.atributos.constituicaoSave
  dexSave.value = data.atributos.destrezaSave
  intSave.value = data.atributos.inteligenciaSave
  sabSave.value = data.atributos.sabedoriaSave
  carismaSave.value = data.atributos.carismaSave

  //prof salva guarda
  forcaCheck.checked = data.atributos.forcaProf ? true : false;
  dexCheck.checked = data.atributos.destrezaProf ? true : false;
  intCheck.checked = data.atributos.inteligenciaProf ? true : false;
  consCheck.checked = data.atributos.constituicaoProf ? true : false;
  sabCheck.checked = data.atributos.sabedoriaProf ? true : false;
  carCheck.checked = data.atributos.carismaProf ? true : false;

  //prof pericias
  acrobaciaProf.checked = data.pericias.find(p => p.nome === "Acrobacia").proficiente ? true : false;
  arcanismoProf.checked = data.pericias.find(p => p.nome === "Arcanismo").proficiente ? true : false;
  atletismoProf.checked = data.pericias.find(p => p.nome === "Atletismo").proficiente ? true : false;
  atuacaoProf.checked = data.pericias.find(p => p.nome === "Atuação").proficiente ? true : false;
  enganacaoProf.checked = data.pericias.find(p => p.nome === "Enganação").proficiente ? true : false;
  furtividadeProf.checked = data.pericias.find(p => p.nome === "Furtividade").proficiente ? true : false;
  historiaProf.checked = data.pericias.find(p => p.nome === "História").proficiente ? true : false;
  intimidacaoProf.checked = data.pericias.find(p => p.nome === "Intimidação").proficiente ? true : false;
  intuicaoProf.checked = data.pericias.find(p => p.nome === "Intuição").proficiente ? true : false;
  investigacaoProf.checked = data.pericias.find(p => p.nome === "Investigação").proficiente ? true : false;
  lidaranimaisProf.checked = data.pericias.find(p => p.nome === "Lidar com Animais").proficiente ? true : false;
  medicinaProf.checked = data.pericias.find(p => p.nome === "Medicina").proficiente ? true : false;
  naturezaProf.checked = data.pericias.find(p => p.nome === "Natureza").proficiente ? true : false;
  percepcaoProf.checked = data.pericias.find(p => p.nome === "Percepção").proficiente ? true : false;
  persuasaoProf.checked = data.pericias.find(p => p.nome === "Persuasão").proficiente ? true : false;
  prestidigitacaoProf.checked = data.pericias.find(p => p.nome === "Prestidigição").proficiente ? true : false;
  religiaoProf.checked = data.pericias.find(p => p.nome === "Religião").proficiente ? true : false;
  sobrevivenciaProf.checked = data.pericias.find(p => p.nome === "Sobrevivência").proficiente ? true : false;

  //ataques
      const index = data.ataques.length;
      if(index != 0){
        for(i = 0; i < index; i++ ){    
          carregaAtaque(data.ataques[i], i + 1)
        }
      }
      

  //HP
  hpAtual.value = `${JSON.stringify(data.vida)}`
  hpMax.value = `${JSON.stringify(data.vidaMax)}`
  hpTemp.value = `${JSON.stringify(data.vidaTemp)}`
  
  //Nivel e proficiencia
  nivel.value = `${JSON.stringify(data.level)}`
  proficiencia.value = `${JSON.stringify(data.proficiencia)}`

  //MAGIAS

  //CD magia
  cdMagia.value = `${JSON.stringify(data.cdMagia)}`

  //Truques
  const cantrips = data.spells.length;
  if(cantrips != 0){
    for(i = 0; i < cantrips; i++){
      adicionarTruqueNaFicha(data.spells[i].nome, data.spells[i].desc, data.spells[i].time, data.spells[i].range, data.spells[i].nivel)
    }
  }

  //Firulas
  aparencia.value = data.aparencia
  idiomas.value = data.idiomas
  background.value =data.background
  carateristicas.value = data.caracteristicas

  //Raça
  raca.value = data.raca


  
  


})
  


forcaAtributo.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraForca/${id}`, {
      headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      atributos: {
        forca: Number(forcaAtributo.value)
      }
    })
    
    }
  )

    const data = await response.json();
  forcaAtributo.value = data.atributos.forca;
  forcaMod.value = data.atributos.forcaMod
  atletismo.value = data.pericias.find(p => p.nome === "Atletismo").valor
  forcaSave.value = data.atributos.forcaSave
  
}
)

dexAtributo.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraDex/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      atributos: {
        destreza: Number(dexAtributo.value)
      }
    })
    
    }
  )
  
  const data = await response.json();
  iniciativa.value = data.atributos.destrezaMod
  dexAtributo.value = data.atributos.destreza;
  dexMod.value = data.atributos.destrezaMod
  acrobacia.value = data.pericias.find(p => p.nome === "Acrobacia").valor
  furtividade.value = data.pericias.find(p => p.nome === "Furtividade").valor
  prestidigitacao.value = data.pericias.find(p => p.nome === "Prestidigição").valor
  dexSave.value = data.atributos.destrezaSave
  
}
)

consAtributo.addEventListener("change", async function(){
 const response = await fetch(`http://177.153.20.221:8080/ficha/alteraCons/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      atributos: {
        constituicao: Number(consAtributo.value)
      }
    })
    
    }
  )

  const data = await response.json();
  consAtributo.value = data.atributos.constituicao;
  consMod.value = data.atributos.constituicaoMod
  consSave.value = data.atributos.constituicaoSave
  
}
)

intAtributo.addEventListener("change", async function(){
  const response = await fetch(`http://177.153.20.221:8080/ficha/alteraInteligencia/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      atributos: {
        inteligencia: Number(intAtributo.value)
      }
    })
    
    }
  )

    const data = await response.json();
  intAtributo.value = data.atributos.inteligencia;
  intMod.value = data.atributos.inteligenciaMod
  intSave.value = data.atributos.inteligenciaSave
  arcanismo.value =  data.pericias.find(p => p.nome === "Arcanismo").valor
  historia.value =  data.pericias.find(p => p.nome === "História").valor
  investigacao.value =  data.pericias.find(p => p.nome === "Investigação").valor
  natureza.value =  data.pericias.find(p => p.nome === "Natureza").valor
  religiao.value =  data.pericias.find(p => p.nome === "Religião").valor
  
}
)

sabAtributo.addEventListener("change", async function(){
 const response = await fetch(`http://177.153.20.221:8080/ficha/alteraSab/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      atributos: {
        sabedoria: Number(sabAtributo.value)
      }
    })
    
    }
  )
      const data = await response.json();
  sabAtributo.value = data.atributos.sabedoria;
  sabMod.value = data.atributos.sabedoriaMod
  sabSave.value = data.atributos.sabedoriaSave
  intuicao.value =  data.pericias.find(p => p.nome === "Intuição").valor
  lidarAnimais.value =  data.pericias.find(p => p.nome === "Lidar com Animais").valor
  medicina.value =  data.pericias.find(p => p.nome === "Medicina").valor
  percepcao.value =  data.pericias.find(p => p.nome === "Percepção").valor
  sobrevivencia.value =  data.pericias.find(p => p.nome === "Sobrevivência").valor
  
}
)

carismaAtributo.addEventListener("change", async function(){
 const response = await fetch(`http://177.153.20.221:8080/ficha/alteraCarisma/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({
      atributos: {
        carisma: Number(carismaAtributo.value)
      }
    })
    
    }
  )
      const data = await response.json();
  carismaAtributo.value = data.atributos.carisma;
  carismaMod.value = data.atributos.carismaMod
  carismaSave.value = data.atributos.carismaSave
  atuacao.value =  data.pericias.find(p => p.nome === "Arcanismo").valor
  engancao.value =  data.pericias.find(p => p.nome === "Enganação").valor
  intimidacao.value =  data.pericias.find(p => p.nome === "Intimidação").valor
  persuasao.value =  data.pericias.find(p => p.nome === "Persuasão").valor
  persuasao.value =  data.pericias.find(p => p.nome === "Persuasão").valor

  
}
)
