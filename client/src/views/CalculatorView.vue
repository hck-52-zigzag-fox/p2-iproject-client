<script>

export default {
    name: 'Calculator',
    methods: {
        calculator(gender, weeklyPhysicalActivity, height, weight, age) {
            let dailyCalories = 0

            switch (gender) {
                case 'male':
                    dailyCalories = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)
                    break;

                case 'female':
                    dailyCalories = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)
                    break;
            }

            switch (weeklyPhysicalActivity) {
                case 'sedentary':
                    dailyCalories = dailyCalories * 1.2
                    break;

                case 'lightlyActive':
                    dailyCalories = dailyCalories * 1.375
                    break;

                case 'moderatelyActive':
                    dailyCalories = dailyCalories * 1.55
                    break;

                case 'veryActive':
                    dailyCalories = dailyCalories * 1.725
                    break;

                case 'extremelyActive':
                    dailyCalories = dailyCalories * 1.9
                    break;
            }

            this.calcResult = dailyCalories
        }
    },
    data() {
        return {
            gender: '',
            age: '',
            weight: '',
            height: '',
            weeklyPhysicalActivity: '',
            calcResult: ''
        }
    }
}
</script>

<template>

    <h1 class="text-center text-3xl">Simple Calorie Deficit Calculator</h1>

    
    <section class="text-gray-600">
        <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-xl font-medium text-gray-900">Your Total Daily Energy Expenditure (TDEE) : {{ Math.floor(calcResult) }} calories</h1>
            </div>
        </div>
    </section>

    <div class="w-full max-w-xs">
        <form action="" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            @submit.prevent="calculator(gender, weeklyPhysicalActivity, height, weight, age)">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="age">Age</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number" name="age" id="age" v-model="age" placeholder="years">
            </div>

            <div class="mb-4">
                <label for="weight" class="block text-gray-700 text-sm font-bold mb-2">Weight</label>
                <input type="number" name="weight" id="weight" v-model="weight"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="in kgs">
            </div>

            <div class="mb-4">
                <label for="height" class="block text-gray-700 text-sm font-bold mb-2">Height</label>
                <input type="number" name="height" id="height" v-model="height"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="in cms">
            </div>

            <div class="mb-4">
                <label for="weeklyPhysicalActivity" class="block text-gray-700 text-sm font-bold mb-2">Weekly Physical
                    Activity</label>
                <select name="weeklyPhysicalActivity" id="weeklyPhysicalActivity" v-model="weeklyPhysicalActivity"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="" selected disabled>Your weeklyPhysicalActivity</option>
                    <option value="sedentary">sedentary</option>
                    <option value="lightlyActive">lightlyActive</option>
                    <option value="moderatelyActive">moderatelyActive</option>
                    <option value="veryActive">veryActive</option>
                    <option value="extremelyActive">extremelyActive</option>
                </select>
            </div>

            <div class="mb-4">
                <label for="gender" class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <select name="gender" id="gender" v-model="gender"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="" selected disabled>Your gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>

            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculate</button>
        </form>
    </div>

</template>