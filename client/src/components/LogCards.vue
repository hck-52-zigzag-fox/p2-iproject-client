<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCicoStore } from '../stores/cico';

export default {
    name: 'LogCards',
    props: ['log'],
    emits: ['deletedFood'],
    computed: {
        ...mapState(useCicoStore, ['dailyCalories']),
        ...mapWritableState(useCicoStore, ['remainingCalories'])
    },
    methods: {
        ...mapActions(useCicoStore, ['deleteLog','countCalories']),
        deleteFromCard(id){
            this.deleteLog(id)
            this.remainingCalories = this.dailyCalories
        }
    }
}
</script>

<template>

    <div
        :class="log.Food.foodStatus == 'red' ? 'block max-w-xs p-6 bg-orange-400 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' : 'block max-w-xs p-6 bg-green-400 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'">
        <div class="rounded bg-white p-6">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ log.Food.name }}
                (per
                100
                grams)</h5>
            <p class="font-bold text-gray-700 dark:text-gray-400">calories: {{ log.Food.calories }}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">sugar: {{ log.Food.sugarG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">fiber: {{ log.Food.fiberG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">sodium: {{ log.Food.sodiumMg }} miligrams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">potassium: {{ log.Food.potassiumMg }} miligrams
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">saturated fat: {{ log.Food.saturatedFatG }}
                grams
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">total fat: {{ log.Food.totalFatG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">cholesterol: {{ log.Food.cholesterolMg }}
                miligrams
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">protein: {{ log.Food.proteinG }} grams</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">carbs: {{ log.Food.carbsTotalG }} grams</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                @click="deleteFromCard(log.id)">
                DELETE
            </button>
        </div>
    </div>

</template>