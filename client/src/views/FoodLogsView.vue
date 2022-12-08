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
        ...mapState(useCicoStore, ['foodLogs', 'userEmail', 'dailyCalories', 'remainingCalories']),
        ...mapWritableState(useCicoStore, ["dailyCalories"])
    },
    methods: {
        ...mapActions(useCicoStore, ["getLogs", 'countCalories'])
    },
    created() {
        this.getLogs()
    },
    components: { LogCards }
}
</script>

<template>
    <section>
        <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
                <h1 class="text-center text-3xl">{{ userEmail }}'s total daily calories : {{ dailyCalories }}</h1>
                <div>
                    <h1 class="text-xl font-medium text-gray-900">Remaining caloric allowance : <span
                            :class="remainingCalories >= 0 ? 'text-xl font-medium text-lime-400' : 'text-xl font-medium text-red-500'">
                            {{ remainingCalories }}</span> </h1>
                </div>
            </div>
        </div>
    </section>

    <h1 class="text-3xl text-center font-medium text-gray-900"> What did you eat today?</h1>
    <div v-if="(foodLogs.length == 0)" class="flex justify-center mt-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_Vg6XgFM6nuNfYve8Ml02r7izgr7B6UYJQ&usqp=CAU" />
    </div>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5"
        @click="countCalories(foodLogs)" v-if="(foodLogs.length > 0)">
        Calculate
    </button>

    <div class="grid grid-cols-3 gap-3 ">

        <LogCards v-for="log in foodLogs" :key="log.id" :log="log" />
    </div>


</template>
