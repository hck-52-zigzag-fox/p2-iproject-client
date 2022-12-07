<script>
import { mapActions } from 'pinia';
import { useCicoStore } from '../stores/cico';

export default {
    name: 'upgrade',
    methods: {
        ...mapActions(useCicoStore, ['order'])
    }
}
</script>

<template>
    <h1>ini upgrade</h1>

    <a href="" @click.prevent="order">upgrade</a>
</template>