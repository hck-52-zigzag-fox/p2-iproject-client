<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import LogCards from '../components/LogCards.vue';
import { useCicoStore } from '../stores/cico';

export default {
    name: "FoodLogsView",
    data() {
        return {
            totalCalories: 0
        }
    },
    computed: {
        ...mapState(useCicoStore, ['foodLogs']),
        ...mapWritableState(useCicoStore, ["dailyCalories"])
    },
    methods: {
        ...mapActions(useCicoStore, ["getLogs"]),
        // countCalories() {
        //     this.foodLogs.forEach(el => {
        //         this.totalCalories += el.Food.calories
        //     })
        // }
    },
    created() {
        this.getLogs()
        // this.countCalories()
    },
    components: { LogCards }
}
</script>

<template>

    <div class="grid grid-cols-3 gap-3">

        <LogCards v-for="log in foodLogs" :key="log.id" :log="log" />

    </div>


</template>
