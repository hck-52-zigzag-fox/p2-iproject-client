<script>
import { mapActions, mapState } from 'pinia';
import { useCicoStore } from '../stores/cico';

export default {
    name: 'FoodCards',
    props: ['food', 'page'],
    computed: {
        ...mapState(useCicoStore, ['userStatus', 'isLogin'])
    },
    methods: {
        ...mapActions(useCicoStore, ['add'])
    }
}
</script>

<template>
    <div class="container flex justify-center items-center">
        <div
            :class="food.foodStatus == 'red' ? 'block max-w-xs p-6 bg-orange-400 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' : 'block max-w-xs p-6 bg-green-400 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'">

            <div class="rounded bg-white p-6">
                <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                        food.name
                }}</h5>
                <div class="mb-2">
                    <p class="font-bold text-gray-700 dark:text-gray-400">serving size: 100 grams</p>
                    <p class="font-bold text-gray-700 dark:text-gray-400">calories: {{ food.calories }}</p>
                </div>
                <p class="font-normal text-gray-700 dark:text-gray-400">sugar: {{ food.sugarG }} grams</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">fiber: {{ food.fiberG }} grams</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">sodium: {{ food.sodiumMg }} miligrams</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">potassium: {{ food.potassiumMg }} miligrams
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">saturated fat: {{ food.saturatedFatG }}
                    grams
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">total fat: {{ food.totalFatG }} grams</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">cholesterol: {{ food.cholesterolMg }}
                    miligrams
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">protein: {{ food.proteinG }} grams</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">carbs: {{ food.carbsTotalG }} grams</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    v-if="(userStatus == 'paid' && page == 'search' && isLogin)">
                    <a href="" @click.prevent="add(food.id)">Log Food</a>
                </button>
            </div>

        </div>
    </div>

</template>