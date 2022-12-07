<script>
import { mapActions, mapState } from 'pinia';
import { useCicoStore } from '../stores/cico'

export default {
    name: 'SearchView',
    data() {
        return {
            input: ''
        }
    },
    methods: {
        ...mapActions(useCicoStore, ['fetchFood', 'add']),

    },
    computed: {
        ...mapState(useCicoStore, ['foundFood', 'userStatus'])
    }
}
</script>

<template>
    <form action="" @submit.prevent="fetchFood(input)">
        <label for="search">Search</label>
        <input type="text" name="search" id="search" v-model="input">
        <button type="submit">submit</button>
    </form>

    <div>

        {{ foundFood }}

        <a href="" v-if="userStatus == 'paid'" @click.prevent="add(foundFood.id)">add</a>
    </div>

</template>