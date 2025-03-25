const niveis = [30, 45, 25, 50]

const nivel10 = niveis.map( (niveis) => niveis +10 )

console.log(nivel10)

const ApGroup =[
    {nome:'Noctis', habilidade:'WarpStrike'},
    {nome:'Ignis', habilidade:'Elemental Magic'},
    {nome:'Prompto', habilidade:'Piercer Shot'}
]

const Hability = ApGroup.map( (ApGroup) => ` ${ApGroup.nome} : ${ApGroup.habilidade}`)

console.log(Hability)

const missoes = [
    {titulo:'caçada ao gordo do kauan', gil:'450'},
    {titulo:'proteger a cidadela', gil:'3000'}
]

const missoesDolares = missoes.map(  (missoes) => missoes.gil*0.1 )

console.log(missoesDolares) 

const itens = [
    {nome:'elixir', efeito:'restaura HP/MP'},
    {nome:'Phoenix Down', efeito:'Revive um aliado'}
]

const idItens = itens.map(  (itens,indice) => `ID: ${indice+1} nome:${itens.nome} / efeito: ${itens.efeito.toUpperCase()} ` )

console.log(idItens)

const inimigos = [
    {nome:'adamantoise',Hp:5000},
    {nome:'Little Demon',Hp:500},
    {nome:'lich',Hp:3000}
]

const filtro = inimigos.filter( inimigos => inimigos.Hp>1000 ).map( inimigos => ` Nome: ${inimigos.nome} hp:${inimigos.Hp}` )

console.log(filtro)