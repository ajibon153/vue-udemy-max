const app = Vue.createApp({
    data() {
        return { name: "", hide: false, bgColor:"#8ddba4" }
    },
    methods: {
        namingClass(e) {
            this.name = e.target.value
        },
        hideClass(e) {
            this.hide = !this.hide
        },
        changeBg(e){
            this.bgColor = e.target.value
        }
    }
})

app.mount("#assignment")
