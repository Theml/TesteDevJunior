<!-- ### **Opção A: Vue2**

### **Tarefa 1: Componente de Lista de Tarefas**

Implemente um componente Vue2 chamado `TaskList` que exibe uma lista de tarefas. Cada tarefa tem um nome e um status de conclusão (concluída ou não).

1. O componente deve permitir adicionar novas tarefas.
2. Cada tarefa deve ter um botão para marcar como concluída ou não concluída.
3. Utilize o sistema de `props` e `emit` para comunicar as mudanças entre componentes.
4. Adicione um botão para filtrar as tarefas concluídas. -->

<template>
  <div>
    <input type="text" v-model="newTask" placeholder="Nova tarefa" />
    <button @click="addTask">Adicionar</button>
    <button @click="toggleShowCompleted">
      {{ showCompleted ? 'Mostrar todas' : 'Mostrar concluídas' }}
    </button>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" />
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['initialTasks'],
  emits: ['update:tasks'],
    data() {
        return {
            tasks: [],
            newTask: '',
            showCompleted: false,
        };
    },
    computed: {
        filteredTasks() {
            return this.tasks.filter(task => this.showCompleted ? true : !task.completed)
        }
    },
    methods: {
        addTask() {
            if(this.newTask.trim()) {
                this.tasks.push({
                    id: Date.now(),
                    name: this.newTask,
                    completed: false,
                });
                this.newTask = '';
            }
        },
        toggleCompleted(task) {
          task.completed = !task.completed;
            this.$emit('update:tasks', this.tasks)
        },
        removeTask(taskId) {
          this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
    },
};
</script>