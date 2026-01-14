const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            fullname: ""
        }
    },
    methods: { 
      // - for event binding, 
      // - executed for every re render cycle of component, 
      // - use for event or data that really needs to be re evaluate all the time
        addCounter() {
            this.counter = this.counter + 1
        },
        reduceCounter() {
            this.counter = this.counter - 1
        },
        setName(event) {
            this.name = event.target.value
        },
        confirmInput(event, lastName = "") {
            this.name = event.target.value + " " + lastName
        },
        outputFullName() {
            // console.log("Running again...")
            // if (this.name === "") return ""
            // return this.name + " " + "Fauji"
        },
        submitForm(e) {
            // e.preventDefault();
            alert("submit")
        },
        resetInput() {
            this.counter = 0
            this.name = ""
        }
    },
    computed: {
        // - call as a method, but not re render every data change on div.id
        // - not re evaluated if one of their "used value change"
        // - use for data that depends on other data
        fullname() {
            console.log("Running again...")
            if (this.name === "" || this.lastName === "") return ""
            return this.name + " " + "Fauji"
        }
    },
    watch: {
        // call when the data state change
        // not used directly in template
        // Allow to run any code in reaction to some change data
        // use for any non data update u want to make
        counter(val) {
            if (val > 5) {
            setTimeout(() => {
              this.counter = 0
            }, 2000);
            }
        }
        // name(value) {
        //     console.log("name change")
        //     if (this.name === "") this.fullname = ""
        //     this.fullname = value + " " + this.lastName
        // },
        // lastName(value) {
        //     console.log("name change")
        //     if (this.name === "") this.fullname = ""
        //     this.fullname = this.name + " " + value
        // }
    }
})

app.mount("#events")
