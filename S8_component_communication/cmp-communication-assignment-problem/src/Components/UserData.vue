<template>
    <form @submit.prevent="addUser">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="enteredUsername" required />
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" id="age" v-model="enteredAge" required />
        </div>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    emits: ["add-user"],
    data() {
        return {
            enteredUsername: "",
            enteredAge: ""
        }
    },
    methods: {
        addUser() {
            const newUser = {
                id: new Date().toISOString(),
                username: this.enteredUsername,
                age: this.enteredAge
            }
            console.log("newUser", newUser)

            this.$emit("add-user", newUser)
        }
    }
}
</script>
