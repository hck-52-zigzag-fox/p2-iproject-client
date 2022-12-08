<script>
import { mapActions } from 'pinia';
import { useCicoStore } from '../stores/cico';

export default {
    name: 'Register',
    data() {
        return {
            dataForm: {
                email: '',
                password: '',
                gender: '',
                age: '',
                height: '',
                weight: '',
                weeklyPhysicalActivity: ''
            }
        }
    },
    methods: {
        ...mapActions(useCicoStore, ['register'])
    }
}
</script>

<template>

    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="register-section">
        <div class="w-full max-w-md space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register to use our Calorie
                    Deficit Calculator!
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Have an account?
                    <a href="" class="font-medium text-green-400 hover:text-green-600" @click.prevent="this.$router.push('/login')" >login
                        here</a>
                </p>
            </div>
            <form class="mt-8 space-y-6" action="#" @submit.prevent="register(dataForm)">
                <input type="hidden" name="remember" value="true">
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email" class="sr-only">Email Address</label>
                        <input id="email" name="email" type="email" required
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email Address" autocomplete="off" v-model="dataForm.email">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" required
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Password" autocomplete="off" v-model="dataForm.password">
                    </div>
                    <div>
                        <label for="gender" class="sr-only ">Gender</label>
                        <select id="gender" v-model="dataForm.gender"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected disabled>Your gender</option>
                            <option value="male" >male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div>
                        <label for="age" class="sr-only">Age</label>
                        <input id="age" name="age" type="number"
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Age" autocomplete="off" v-model="dataForm.age">
                    </div>
                    <div>
                        <label for="height" class="sr-only">Height</label>
                        <input id="height" name="height" type="number"
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Height in cm" autocomplete="off" v-model="dataForm.height">
                    </div>
                    <div>
                        <label for="weight" class="sr-only">Weight</label>
                        <input id="weight" name="weight" type="number"
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Weight in kg" autocomplete="off" v-model="dataForm.weight">
                    </div>
                    <div>
                        <label for="weeklyPhysicalActivity" class="sr-only ">Weekly Physical Activity</label>
                        <select id="countries" v-model="dataForm.weeklyPhysicalActivity"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected disabled>Your Activity Level</option>
                            <option value="sedentary">Sedentary</option>
                            <option value="lightlyActive">Lightly Active</option>
                            <option value="moderatelyActive">Moderately Active</option>
                            <option value="veryActive">Very Active</option>
                            <option value="extremelyActive">Extremely Active</option>
                        </select>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <!-- Heroicon name: mini/lock-closed -->
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>