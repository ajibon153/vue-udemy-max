const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "Master the course and learn Vue!",
            // courseGoalB: "<h2>Master the course and learn Vue!</h2>",
            vueLink: "http://vuejs.org"
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
})

app.mount("#user-goal")
