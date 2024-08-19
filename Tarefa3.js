// ### **Tarefa 3: Contagem de Ocorrências**

// Crie uma função chamada `countOccurrences` que recebe um array de strings e retorna um objeto onde as chaves são as strings do array e os valores são o número de vezes que cada string aparece no array.

function countOccurrences(arr) {
    const counts = {};
    for (const fruit of arr) {
        counts[fruit] = (counts[fruit] || 0) + 1
    }
    return counts;
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const result = countOccurrences(fruits)
console.log(result);
