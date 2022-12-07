<script>
import { mapActions, mapState } from 'pinia';
import FoodCards from '../components/foodCards.vue';
import { useCicoStore } from '../stores/cico';

export default {
    name: "HomePage",
    computed: {
        ...mapState(useCicoStore, ["popularFood"])
    },
    methods: {
        ...mapActions(useCicoStore, ["fetchPopularFood"])
    },
    created() {
        this.fetchPopularFood();
    },
    components: { FoodCards }
}
</script>

<template>

    <div class="grid grid-cols-3 gap-3 mx-auto container">

        <FoodCards v-for="food in popularFood" :key="food.id" :food="food" />

    </div>

    
</template>