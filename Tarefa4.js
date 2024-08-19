// ### **Tarefa 4: Agrupamento de Objetos**

/* 
Implemente uma função chamada `groupByCategory` que recebe um array de objetos, onde cada objeto representa um item com uma `category`.
A função deve retornar um objeto onde as chaves são as categorias e os valores são arrays contendo os itens correspondentes a cada categoria. 
*/

function groupByCategory(items) {
    const groupedItems = {};

    items.forEach(item => {
      const { category } = item;
      (groupedItems[category] = groupedItems[category] || []).push(item);
    });
  
    return groupedItems;
}

const items = [
    { name: 'apple', category: 'fruit'},
    { name: 'carrot', category: 'vegetable'},
    { name: 'banana', category: 'fruit'},
    { name: 'broccoli', category: 'vegetable'}
];
const groupedItems = groupByCategory(items)
console.log(groupedItems);
