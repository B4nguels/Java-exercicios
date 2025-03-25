// leo fiz atividade em casa estudano e sua atividade no final
 
var leo = ['leo💘💗💓','leo💘💗💓','leo💘💗💓','leo💘💗💓','leo💘💗💓',]
 
for(i=0;i<leo.length;i++){
    console.log(leo[i])
}

 
 
 
 
var personagens = ['Noctis', 'Gladiolus', 'Ignis', 'Prompto', 'Lunafreya'] 

for(i=0; i<personagens.length; i++){
    console.log(personagens[i])
}

// var armas = ['Engine Blade','Greatsword','Daggers','Pistol']

// for( i=0; i<armas.length; i++){
//     console.log(armas[i])
// }

const Noctis = {
    primeiroNome: 'Noctis',
    nome: 'Noctis Lucis Caelum',
    idade: 20,
    arma: 'Engine Blade',
    grupo: ['Gladiolus','Ignis','Prompto'],
    ATK: 40
}

const chanceArdyn = {
    primeiroNome:'Ardyn',
    ATK: 40
}



console.log(`seu nome é ${Noctis.nome} tem ${Noctis.idade} usa a arma ${Noctis.arma}. ele é amigo de ${Noctis.grupo}`
)

function batalha(atacante, defensor){
    return atacante + ' ataca ' + defensor +' com ' + Noctis.arma
}

console.log(batalha("Noctis","Ardyn"))

function calcularDano(atacante,defensor,danoBase){
    return  atacante + " atacou " + defensor + " e causou " + (danoBase* (Math.random()* 1+0.5).toFixed(1)) + " de dano "
}

console.log( calcularDano(Noctis.primeiroNome,chanceArdyn.primeiroNome, 40 ))

const missoes = [
    { titulo:'Caçada ao imenso kauan!', dificuldade:'dificil',recompensa:'5000'},
    { titulo:'Missao nao deixe Celbit dominar mentes! ', dificuldade:'media',recompensa:'2500'},
    { titulo:'Procure os cohocobos crianças', dificuldade:'facil',recompensa:'1000'},
    { titulo:'Caçada ao imenso kauan!', dificuldade:'dificil',recompensa:'5000'},
    { titulo:'Missao nao deixe Celbit dominar mentes! ', dificuldade:'media',recompensa:'2500'},
    { titulo:'Procure os cohocobos crianças', dificuldade:'facil',recompensa:'1000'}
]

function filtrarMissoes(filtro){    
    const missoesFiltradas = []

    for(i=0;i<missoes.length;i++){
        if(missoes[i].dificuldade === filtro){
            missoesFiltradas.push(missoes[i])
        }
    }
    return missoesFiltradas

}

const missoesDificieis = filtrarMissoes('dificil');
console.log(missoesDificieis)



const armas = [
    {nome:'Engine Blade', personagens:'Noctis', dano: 140},
    {nome:'Greatsword', personagens:'Gladious', dano: 200},
    {nome:'Daggers', personagens:'Ignis', dano:78},
    {nome:'Pistol', personagens:'Prompto', dano: 58},
]

const armasDetalhadas = armas.map((armas)=> `${armas.personagens} usa a arma ${armas.nome} e da ${armas.dano} de dano`)

console.log(armasDetalhadas)