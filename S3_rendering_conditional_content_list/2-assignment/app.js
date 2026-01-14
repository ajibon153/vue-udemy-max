const app = Vue.createApp({
    data() {
        return {
            enteredValue: "",
            showTask: true,
            goals: []
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = ""
        },
        removeGoal(idx) {
            this.goals.splice(idx,1);
        },
        visibility() {
            this.showTask = !this.showTask;
        },
    }
})

app.mount("#assignment")
