<script>
import { mapActions, mapState } from 'pinia';
import { useCicoStore } from '../stores/cico';

export default {
    name: 'HomePage',
    computed: {
        ...mapState(useCicoStore, ['popularFood'])
    },
    methods: {
        ...mapActions(useCicoStore, ['fetchPopularFood'])
    },
    created() {
        this.fetchPopularFood()
    }
}
</script>

<template>

    <h1>ini homepage</h1>

    {{ popularFood }}
    
</template>