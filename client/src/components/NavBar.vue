<script>
import { mapActions, mapState } from 'pinia';
import { useCicoStore } from '../stores/cico'

export default {
    name: 'NavBar',
    computed: {
        ...mapState(useCicoStore, ['isLogin', 'userStatus', 'userEmail', 'dailyCalories'])
    },
    methods: {
        ...mapActions(useCicoStore, ['logout'])
    }
}
</script>

<template>
    <nav class="bg-green-100">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="hidden h-8 w-auto lg:block"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
                    </div>
                    <div class="flex space-x-4">

                        <RouterLink to="/">
                            <a href="#"
                                class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </a>
                        </RouterLink>

                        <RouterLink to="/register" v-if="!isLogin">
                            <a href="#"
                                class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                register
                            </a>
                        </RouterLink>

                        <RouterLink to="/login" v-if="!isLogin">
                            <a href="#"
                                class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                login
                            </a>
                        </RouterLink>

                        <RouterLink to="/search" v-if="isLogin">
                            <a href="#"
                                class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Search
                            </a>
                        </RouterLink>

                        <RouterLink to="/calculator" v-if="isLogin">
                            <a href="#"
                                class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Calculator
                            </a>
                        </RouterLink>

                        <RouterLink to="/upgrade" v-if="(isLogin && userStatus == 'unpaid')">
                            <a href="#"
                                class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                upgrade
                            </a>
                        </RouterLink>

                        <RouterLink to="/logs" v-if="(isLogin && userStatus == 'paid')">
                            <a href="#"
                                class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Food Logger
                            </a>
                        </RouterLink>


                        <a href="#" 
                            class="text-black-300 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><a
                                href="" @click.prevent="logout" v-if="isLogin">Logout</a></a>

                        <p class="text-black-300 px-3 py-2 rounded-md text-sm font-medium" v-if="isLogin">Welcome, {{ userEmail }}</p>

                        <p class="text-black-300 px-3 py-2 rounded-md text-sm font-medium" v-if="isLogin">Member status: {{ userStatus }}
                            member</p>

                        <p class="text-black-300 px-3 py-2 rounded-md text-sm font-medium" v-if="isLogin">Daily calories: {{
                                dailyCalories
                        }}
                            calories</p>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>