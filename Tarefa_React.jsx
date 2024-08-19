// ### **Opção B: React**

const { useState } = require("react")

// ### **Tarefa 1: Componente de Lista de Tarefas**

/* Implemente um componente React chamado `TaskList` que exibe uma lista de tarefas. Cada tarefa tem um nome e um status de conclusão (concluída ou não).

 1. O componente deve permitir adicionar novas tarefas.
 2. Cada tarefa deve ter um botão para marcar como concluída ou não concluída.
 3. Utilize o hook `useState` para gerenciar o estado das tarefas.
 4. Adicione um botão para filtrar as tarefas concluídas.
 */

function TaskList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [showCompleted, setShowCompleted] = useState(false)

    const handleAddTask = () => {
        if(newTask.trim() !== '') {
            setTasks([... tasks, {id: Date.now(),  name: newTask, completed: false}])
            setNewTask('');
        }
    };

    const handleToggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                return {...task, completed: !task.completed}
            }
            return task
        }));
    }

    const filteredTasks = tasks.filter(task => showCompleted ? true : !task.completed)

    return(
        <div>
            <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Nova Tarefa" 
            />
            <button onClick={handleAddTask}>Adicionar</button>
            <button onClick={() => setShowCompleted(!showCompleted)}>
            {showCompleted ? 'Mostrar todas' : 'Mostrar concluídas'}
            </button>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleCompleted(task.id)}
                        />
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
