// a) 1, 3, 5, 7, ___

// b) 2, 4, 8, 16, 32, 64, ____

// c) 0, 1, 4, 9, 16, 25, 36, ____

// d) 4, 16, 36, 64, ____

// e) 1, 1, 2, 3, 5, 8, ____

// f) 2,10, 12, 16, 17, 18, 19, ____

const data = [
    [1, 3, 5, 7, 9], // ok - impares
    [2, 4, 8, 16, 32, 64, 128], // ok - dobro
    [0, 1, 4, 9, 16, 25, 36, 49], // ok - quadrado dos numero naturais começando do 0
    [1, 1, 2, 3, 5, 8, 13], // ok - fibonacci
    [2, 10, 12, 16, 17, 18, 19, 200] // ok - começa com d ???
];

for (let i = 0; i < data.length; i++) {
        console.log({
            sequencia: data[i],
            resposta: data[i].at(-1)
        });
}