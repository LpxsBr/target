const data = require('./file/dados.json') // arquivo json usado como base
// console.log(data); // verificando se os dados foram importados


/**
 * function monthValues
 * retorna um array com valores maiores que 0
 * retorna a soma de todos os valores desse array
 * retorna o tamanho desse array
 */
const monthValues = () => {
    let values = []
    let sum = 0
    let len = 0
    for(let i = 0; i < data.length; i++){
        if(data[i].valor > 0){
            values.push(data[i].valor)
            sum+=data[i].valor
        }
    }
    len = values.length
    return {values, sum, len}
}

/**
 * function infoValues
 * retorna um objeto com o menor e o maior valor faturado
 */
const infoValues = () => {   
    minValue = Math.min(...monthValues().values)
    maxValue = Math.max(...monthValues().values)
    return  {minValue, maxValue}
}

/**
 * function dailyBiggerThanMontly
 * retorna quantidade de dias em que o
 * faturamento diario superou o mensal
 */
const dailyBiggerThanMonthly = () => {
    let median = parseFloat(monthValues().sum/monthValues().len).toFixed(2)
    let biggerDays = []
    for(let i = 0; i < monthValues().values.length; i++){
        if(monthValues().values[i] > median){
            biggerDays.push(monthValues().values[i])
        }
    }
    return(biggerDays.length)
}

/**
 * console com as informações solicitadas
 */

console.log(
    `
    Menor valor faturado: ${infoValues().minValue}
    Maior valor faturado: ${infoValues().maxValue}
    Nº dias com Faturamento diário maior que a média mensal: ${dailyBiggerThanMonthly()}
    `   
)