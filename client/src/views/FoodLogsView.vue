<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCicoStore } from '../stores/cico';

export default {
    name: 'FoodLogsView',
    computed: {
        ...mapState(useCicoStore, ['logs']),
        ...mapWritableState(useCicoStore, ['dailyCalories'])
    },
    methods: {
        ...mapActions(useCicoStore, ['getLogs'])
    },
    created() {
        this.getLogs()
    }
}
</script>

<template>

    <div class="grid grid-cols-3 gap-3">

        <a href="#" v-for="log in logs" :key="log.id"
            class="block max-w-fit p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ log.Food.name }} (per
                100
                grams)</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">sugar: {{ log.Food.sugarG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">fiber: {{ log.Food.fiberG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">sodium: {{ log.Food.sodiumMg }} miligrams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">potassium: {{ log.Food.potassiumMg }} miligrams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">saturated fat: {{ log.Food.saturatedFatG }} grams
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">total fat: {{ log.Food.totalFatG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">cholesterol: {{ log.Food.cholesterolMg }} miligrams
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">protein: {{ log.Food.proteinG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">carbs: {{ log.Food.carbsTotalG }} grams</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="" >
                DELETE
            </button>
        </a>



    </div>


    {{ logs }}

    {{ (dailyCalories - logs[0].Food.calories) }}


</template>
