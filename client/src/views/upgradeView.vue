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

    <section class="container items-center content-center justify-content-center">
        <div class="flex justify-center mt-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJvXMyZBHupsQXwQ528rJB7I9HNysbcju7Q&usqp=CAU" />

        </div>
        <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
                <h1 class="text-center text-3xl mb-8">Enjoy our Food Logging feature by upgrading today!
                </h1>
                <h1 class="text-center text-3xl mb-8">Only <span class="text-red-500">Rp 100,000</span> for lifetime account
                </h1>
            </div>
            <div class="flex justify-center">
                <button class="bg-red-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full h-20"
                    @click.prevent="order">
                    upgrade
                </button>

            </div>
        </div>
    </section>
</template>