<template>
    <section>
        <header>Test 1</header>
        <user-data @add-user="addUser"></user-data>
        <ul>
            <active-user 
             v-for="user in users"
             :key="user.id"
             :id="user.id"
             :username="user.username"
             :age="user.age"
            >
            </active-user>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    id: 1,
                    username: "Max",
                    age: 33
                },
                {
                    id:2,
                    username: "Aji",
                    age: 30
                },
            ]
        }
    },
    methods:{
        addUser(newUser){
            this.users.push(newUser);
        }
    }
}
</script>
