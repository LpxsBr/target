const data = [
    {state: "SP", value: 67836.43},
    {state: "RJ", value: 36678.66},
    {state: "MG", value: 29229.88},
    {state: "ES", value: 27165.48},
    {state: "Outros", value: 19849.53}
]

/**
 *  function valuesTreatment
 *  retorna a soma dos valores da constante data
 */

const valuesTreatment = () => {
    let sum = 0
    for(let i = 0; i < data.length; i++){
        if(data[i].value > 0){
            sum+=data[i].value
        }
    }
    return sum
}

/**
 * console com as informações solicitadas
 */

console.log(
    data.map((unit)=>{
        let percent = (unit.value/valuesTreatment()*100).toFixed(2)
        return({
            state: unit.state,
            value: unit.value,
            Percent: `${percent}%`})
    })
)