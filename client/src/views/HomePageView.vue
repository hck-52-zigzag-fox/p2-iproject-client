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

    <section>
        <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
                <h1 class="text-center text-3xl">Did you know? 6 out of 10 Most Popular Food are considered "unhealthy"</h1>
                <h1 class="text-xl font-medium text-gray-900"><span class="text-orange-400">Red</span> food means you can still enjoy them, but watch the portions!</h1>
                <h1 class="text-xl font-medium text-gray-900"><span class="text-green-400">Green</span> food means you can eat more of them</h1>
            </div>
        </div>
    </section>

    <div class="grid grid-cols-3 gap-3 mx-auto container mr-7">

        <FoodCards v-for="food in popularFood" :key="food.id" :food="food" />

    </div>


</template>