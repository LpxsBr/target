/**
 * preparando a const input para receber o modulo readline
 */

const input = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

/**
 * function makeReverse
 * retorna o valor organizado em ordem inversa a original
 */

const makeReverse = (word) => {
    let newWord = []
    for(let i = word.length - 1; i>=0; i--){
        newWord.push(word[i])
    }
    newWord = newWord.join('')
    return newWord
}

/**
 * chamando o readline input para receber o valor a ser tratado
 */

console.log('bem-vindo ao reverse! Teste-o :)')
input.question('Digite uma palavra/texto/etc: ', (valor)=>{
    console.log(`\n Resultado: ${makeReverse(valor)} \n`);
    input.close()
})