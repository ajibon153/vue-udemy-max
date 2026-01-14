const app = Vue.createApp({
    data() {
        return {
            name: "Aji Muhammad Fauji",
            age: 29,
            ageRandom: Math.random(),
            imgLink: "https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png"
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

app.mount("#assignment")
