

function msgWelcome(name){
    alert("Olá " + name)
}

function processUser(callback) {
    var name = prompt("Por favor insira seu nome")
    callback(name)
}

processUser(msgWelcome)

function processIdade(callback) {
    var idade = prompt("Informe sua idade")
    callback(idade)
}

function idadecheck(idade){
    if(idade <= 14){
       window.alert("Vai estudar ")
    }else {
        window.alert('Bem vindo e pode usar a calculadora')
    }
}

processIdade(idadecheck)




/*ESTA DANDO ERRO NA CONDIÇÃO
function faixaIdade() {
    var idade = window.document.querySelector('input#idade')
    var show = window.document.querySelector('div#show')
}

*/
function somar() {
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.querySelector('input#txtn4')
    var res = window.document.getElementById('res')

    var n1 = Number(tn3.value)
    var n2 = Number(tn4.value)
    var s = n1 + n2
    res.innerHTML = `A soma dos números ${n1} e ${n2} é <strong>${s}</strong> `
}

function subtrai() {
    var tn5 = window.document.getElementById('txtn5')
    var tn6 = window.document.querySelector('input#txtn6')
    var res = window.document.getElementById('sub')

    var n1 = Number(tn5.value)
    var n2 = Number(tn6.value)
    var s = n1 - n2
    res.innerHTML = `A subtração dos números ${n1} e ${n2} é <strong>${s}</strong> `

}

function divide() {
    var tn7 = window.document.querySelector('input#txtn7')
    var tn8 = window.document.querySelector('input#txtn8')
    var res = window.document.getElementById('divide')

    var n1 = Number(tn7.value)
    var n2 = Number(tn8.value)
    var s = n1 / n2
    res.innerHTML =`A divisão dos números ${n1} e ${n2} é <strong>${s}</strong>`

}

function multi() {
    var tn9 = window.document.querySelector('input#txtn9')
    var tn10 = window.document.querySelector('input#txtn10')
    var res = window.document.getElementById('multi')

    var n1 = Number(tn9.value)
    var n2 = Number(tn10.value)
    var s = n1 * n2
    res.innerHTML = `A multiplicação dos valores ${n1} e ${n2} é <strong>${s}</strong>`

}
/*
var btn1 = window.document.querySelector('input#teste1')
var btn2 = window.document.querySelector('input#teste2')
var btn3 = window.document.querySelector('input#teste3')
var btn4 = window.document.querySelector('input#teste4')
*/

var btn1 = window.document.getElementById('teste1')
var btn2 = window.document.getElementById('teste2')
var btn3 = window.document.getElementById('teste3')
var btn4 = window.document.getElementById('teste4')


// não funcionou --> var btn = window.document.getElementsById('teste1', 'teste2', 'teste3')


function entrou() {

  
    btn1.style.background = 'red'
    btn2.style.background = 'red'
    btn3.style.background = 'red'
    btn4.style.background = 'red'
    
    
    
}

function saiu() {
   btn1.style.background = 'green'
   btn2.style.background = 'green'
   btn3.style.background = 'green'
   btn4.style.background = 'green'
   
}
