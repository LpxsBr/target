IGNOREMPFV
let tSpeed = {speend: 80, distI: 100}
let cSpeed = {speend: 110, distI: 0}
let distanceI = 0
let distanceF = 100
let pedagios = 2

for (let i = 0; i < distanceF; i++) {
    distanceI++
    let tsp = tSpeed.distI--
    let csp = cSpeed.distI++

    console.log({
        status: `rodou : ${distanceI} km`,

        caminhao: `esta em ${tsp}`,

        carro: `esta em ${csp}`
    });
    if(tsp == csp) console.log("==========================CRUZOU==========================");
}

