/* ISTANZA */
const app = Vue.createApp({
    data(){
        return{
        
        newTask:'',
        tasks :[{
            text: 'fare la spesa',
            done: false,
            id: 1
            },
            {
            text: 'preparare la cena',
            done: false,
            id: 2
            },
            {
            text: 'lavare i vestiti',
            done: false,
            id: 3
            },
            {
            text: 'allenarsi',
            done: false,
            id: 4
            },
            {
            text: 'curare le piante',
            done: false,
            id: 5
            }],  
            
        }
    },
    
    methods:{
        /* FUNZIONE CHE ELIMINA LA TASK */
        deleteTask(id)  
        {let updateTasks = this.tasks.filter((task) => task.id !== id);
        this.tasks = updateTasks;},
        /* FUNZIONE CHE AGGIUNGA LA TASK */
        addTask(){
            if(!this.newTask.length) return
            const newTask = {done: false, text: this.newTask, id: this.nextId};
            this.tasks.push(newTask);

            this.newTask= ''
        }
    },
    computed:{
        /* FUNCTION CHE MI DA IL NEXT ID */
        nextId(){
            let highestId = 0;
            this.tasks.forEach(task => {
                if(task.id > highestId) highestId= task.id
            });
            const nextId = ++highestId;
            return nextId
        }
    }
})

/* MONTO NEL DOM */

app.mount('#root');

