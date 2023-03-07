/**
 * preparando a const input para receber o modulo readline
 */

const input = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

/**
 * function existInFibonacci
 * cria um array com a sequencia de fibonacci, verifica se o valor existe dentro da sequencia
 * retorna um objeto composrto pelo status true / false e uma mensagem.
 */

function existInFibonacci(n) {
    let fibonacci = [0, 1, 1]
    let previous = 1
    let now = 1
    let next = 0
    for (let i = 0; i <= n; i++) {
        next = previous + now
        previous = now
        now = next
        fibonacci.push(now)
    }
    test = fibonacci.find((e) => e == n)
    if (test != undefined) {
        return ({ status: true, msg: `VERDADEIRO: o numero ${n} faz parte da sequência de Fibonacci` })
    } else {
        return ({ status: false, msg: `FALSO: o numero ${n} não está na sequência de Fibonacci` })
    }
}

/**
 * chamando o readline input para receber o valor a ser tratado
 */

console.log('bem-vindo ao teste do numero fibonacci')
input.question('Digite um numero: ', (valor) => {
    console.log(existInFibonacci(valor).msg);
    input.close()
})