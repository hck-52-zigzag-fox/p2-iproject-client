<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import LogCards from '../components/LogCards.vue';
import { useCicoStore } from '../stores/cico';

export default {
    name: "FoodLogsView",
    data() {
        return {
            // totalCalories: 0
        }
    },
    computed: {
        ...mapState(useCicoStore, ['foodLogs', 'userEmail','dailyCalories', 'remainingCalories']),
        ...mapWritableState(useCicoStore, ["dailyCalories"])
    },
    methods: {
        ...mapActions(useCicoStore, ["getLogs", 'countCalories'])
    },
    created() {
        this.getLogs()
        
        if(this.dailyCalories == this.remainingCalories){
            this.countCalories(this.foodLogs)
        }
    },
    components: { LogCards }
}
</script>

<template>

    {{userEmail}}'s daily calories : {{dailyCalories}}
    {{remainingCalories}}

    <div class="grid grid-cols-3 gap-3">

        <LogCards v-for="log in foodLogs" :key="log.id" :log="log" />

    </div>


</template>
