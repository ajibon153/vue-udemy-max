<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
        <button @click="toggleFavorite">{{ isFavorite ? "Unfavorite" : "Favorite" }}</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
        <button @click="deleteFriend">Delete</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props: {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        emailAddress: { type: String, required: true },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ["toggle-favorite", "delete-contact"],
    // emits: {
    //     "toggle-favorite": function (id) {
    //         if (id) {
    //             return true
    //         } else {
    //             console.warn("Id is missing")
    //             return false
    //         }
    //     }
    // },
    data() {
        return {
            // friend: {
            //     id: 1,
            //     name: "Alice",
            //     phone: "123-456-7890",
            //     email: "alice@example.com"
            // },
            detailsAreVisible: false
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite() {
            this.$emit("toggle-favorite", this.id)
        },
        deleteFriend() {
            this.$emit("delete-contact", this.id)
        }
    }
}
</script>
