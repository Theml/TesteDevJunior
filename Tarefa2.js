// ### **Tarefa 2: Função Assíncrona**

/* Implemente uma função assíncrona chamada `fetchUserData` que faz uma chamada para uma API REST fictícia (simule a chamada usando `fetch` ou `axios`).
1. A função deve fazer uma requisição `GET` para a URL `https://jsonplaceholder.typicode.com/users`.
2. Após obter os dados, filtre os usuários cujo `username` comece com a letra "C".
3. Retorne uma promessa que resolve com esses dados filtrados.
**Dica:** Use `async/await` para simplificar o código assíncrono
*/

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        const filteredUser = data.filter(user => user.username.startsWith("C"));
        return filteredUser;
    } 
    catch (error) {
        console.error('Error: ', error)
        return [];   
    }
}

fetchUserData()
.then(users => {console.log(users);
})
.catch(error => {console.error('Error: ', error)});
