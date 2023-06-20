/* ISTANZA */
const app = Vue.createApp({
    data(){
        return{
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
        deleteTask()  
        {let updateTasks = this.tasks.filter((task) => task.id !== id);
        this.tasks = updateTasks;
      }
    }
})

/* MONTO NEL DOM */

app.mount('#root');

