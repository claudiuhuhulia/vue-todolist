/* ISTANZA */
const app = Vue.createApp({
    data(){
        return{
             tasks :[{
            text: 'fare la spesa',
            done: false
            },
            {
            text: 'preparare la cena',
            done: false
            },
            {
            text: 'lavare i vestiti',
            done: false
            },
            {
            text: 'allenarsi',
            done: false
            },
            {
            text: 'curare le piante',
            done: false
            }]   
            
        }
    },
    
    methods:{

    }
})

/* MONTO NEL DOM */

app.mount('#root');

