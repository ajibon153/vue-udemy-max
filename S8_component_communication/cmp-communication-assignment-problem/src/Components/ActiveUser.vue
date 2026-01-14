<template>
    <li>
        <h2>{{ username }}</h2>
        <h3>{{ age }}</h3>
    </li>
</template>

<script>
export default {
    // props: ["username", "age"],
    props:{
        username: {type: String, required: true},
        age: {type: Number, required: true}
    }
}
</script>
