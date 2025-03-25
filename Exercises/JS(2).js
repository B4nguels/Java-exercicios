const niveis = [30, 45, 25, 50]

const nivel10 = niveis.map((niveis) => niveis + 10)

console.log(nivel10)

const ApGroup = [
    { nome: 'Noctis', habilidade: 'WarpStrike' },
    { nome: 'Ignis', habilidade: 'Elemental Magic' },
    { nome: 'Prompto', habilidade: 'Piercer Shot' }
]

const Hability = ApGroup.map((ApGroup) => ` ${ApGroup.nome} : ${ApGroup.habilidade}`)

console.log(Hability)

const missoes = [
    { titulo: 'caçada ao gordo do kauan', gil: '450' },
    { titulo: 'proteger a cidadela', gil: '3000' }
]

const missoesDolares = missoes.map((missoes) => missoes.gil * 0.1)

console.log(missoesDolares)

const itens = [
    { nome: 'elixir', efeito: 'restaura HP/MP' },
    { nome: 'Phoenix Down', efeito: 'Revive um aliado' }
]

const idItens = itens.map((itens, indice) => `ID: ${indice + 1} nome:${itens.nome} / efeito: ${itens.efeito.toUpperCase()} `)

console.log(idItens)

const inimigos = [
    { nome: 'adamantoise', Hp: 5000 },
    { nome: 'Little Demon', Hp: 500 },
    { nome: 'lich', Hp: 3000 }
]

const filtro = inimigos.filter(inimigos => inimigos.Hp > 1000).map(inimigos => ` Nome: ${inimigos.nome} hp:${inimigos.Hp}`)

console.log(filtro)

const falas = [
    { nome: 'Noctis', fala: 'Let’s end this' },
    { nome: 'Ignis', fala: 'I’ll devise a strategy. Stand by.' },
    { nome: 'Prompto', fala: 'Hey, I got a sweet shot! Wanna see?' },
    { nome: 'gladiolus', fala: 'Hesitate, and you die. Plain and simple.' },

]

const um = 0

const soFalas = falas.filter(letra => letra.fala.length)

const primeiraLetra = soFalas.map(teste => teste.fala[0])

console.log(primeiraLetra)

const juntandoNiveis = niveis.reduce((acumulador, NivelAtual) => NivelAtual + acumulador, 0)

console.log(juntandoNiveis)

const party = [
    { nome: "Noctis", level: 50 },
    { nome: "Ignis", level: 45 },
    { nome: "Prompto", level: 40 },
    { nome: "Gladiolus", level: 55 }
]

const mais10 = party.map(festa => festa.level + 10)

console.log(mais10)


const somaParty = party.reduce((acc, curr) => { return acc + curr.level; }, 0)

console.log(somaParty)

const armas = [
    { nome: "Engine Blade", tipo: "Espada" },
    { nome: "Greatsword", tipo: "Espada" },
    { nome: "Daggers", tipo: "Adaga" },
    { nome: "Pistol", tipo: "Pistola" }
];

const espadas = armas.filter(
    arms => arms.tipo === "Espada"
).map(parametro => parametro.nome)

console.log(espadas)

const daggersAndPistol = armas.filter(
    arms => arms.tipo === "Adaga"
).map(parametro => parametro.nome)

console.log(daggersAndPistol)

const daggersAndPistol2 = armas.filter(
    arms => arms.tipo === "Pistola"
).map(parametro => parametro.nome)

console.log(daggersAndPistol2)



function primeiraTabuada(n) {
    let resultados = []
    for (i = 1; i <= 10; i++) {
        resultados.push(n * i)
    }
    return resultados
}


console.log(primeiraTabuada(6))


function tabuada(ND) {
    let resultados = []
    for (i = 1; i <= 10; i++) {
        resultados.push(ND * i)
    }
    return resultados
}

console.log(tabuada(7))


var referencias = [
    "Noctis", "Ignis",
    "Gladiolus"
];

const nomeSorteado = referencias[Math.floor(Math.random() *referencias.length)]

//conferir se tem pelomenos 3 nomes

while (referencias.length = 3){
    referencias.splice
    
}

//termino dps
