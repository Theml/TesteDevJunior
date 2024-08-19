// ### **Tarefa 5: Mesclar Arrays de Objetos**

/* 
Implemente uma função chamada `mergeArrays` que recebe dois arrays de objetos e mescla os objetos que têm a mesma chave `id`. 
O resultado deve ser um novo array de objetos onde cada objeto contém todas as propriedades dos objetos com o mesmo `id`. 
Se uma propriedade for compartilhada, o valor do segundo array deve sobrescrever o do primeiro.
*/
   
function mergeArrays(arr1, arr2) {
   return [...arr1, ...arr2]
    .reduce((acc,obj) => {
        acc[obj.id] = { ...acc[obj.id], ...obj}
        return acc;
    }, {});
}

const arr1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
];
  
const arr2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
];

const mergeArray = mergeArrays(arr1, arr2);
console.log(mergeArray);
