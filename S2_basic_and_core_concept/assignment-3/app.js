const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            // message:"",
        }
    },
    methods: {
        add(value) {
            console.log("test");
                this.counter = this.counter + value;
        }
    },
    computed:{
        message(){
            if(this.counter < 37) return "Not there yet"
            else if((this.counter > 37)) return "Too much"
            else return "CORRECT"
        }
    },
    watch:{
        counter(val){
            console.log(val);
            if(val > 37) setTimeout(() => {
                this.counter = 0
            }, 5000);
        }
    }
})

app.mount("#assignment")
