// ### **Tarefa 1: Manipulação de Arrays e Objetos**

/* 
Crie uma função chamada `transformData` que recebe um array de objetos representando usuários e retorna um novo array com os seguintes critérios:
1. Cada objeto do array original possui as propriedades: `id`, `name`, `age`, `isActive`.
2. A função deve retornar um novo array contendo apenas os usuários ativos (`isActive: true`).
3. Adicionalmente, o novo array deve conter apenas as propriedades `id` e `name`.
4. Ordene o array final por `name` em ordem alfabética.
*/ 

function transformData(users) {
    users = [
        { id: 1, name: 'Alice', age: 25, isActive: true },
        { id: 2, name: 'Bob', age: 30, isActive: false },
        { id: 3, name: 'Charlie', age: 22, isActive: true }
      ];
      return users.filter(user => user.isActive).map(user => ({ id: user.id, name:
        user.name })).sort((a, b) => a.name.localeCompare(b.name));
    }
    console.log(transformData());
