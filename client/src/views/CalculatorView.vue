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
            calcResult : ''
        }
    }
}
</script>

<template>

    <h1>ini calculator</h1>
    <form action="" @submit.prevent="calculator(gender, weeklyPhysicalActivity, height, weight, age)">
    
        <label for="age">Age</label>
        <input type="number" name="age" id="age" v-model="age" >
    
        <label for="weight">Weight</label>
        <input type="number" name="weight" id="weight" v-model="weight" >
    
        <label for="height">Height</label>
        <input type="number" name="height" id="height" v-model="height" >
    
        <label for="weeklyPhysicalActivity">Weekly Physical Activity</label>
        <select name="weeklyPhysicalActivity" id="weeklyPhysicalActivity" v-model="weeklyPhysicalActivity" >
            <option value="" selected disabled>Your weeklyPhysicalActivity</option>
            <option value="sedentary">sedentary</option>
            <option value="lightlyActive">lightlyActive</option>
            <option value="moderatelyActive">moderatelyActive</option>
            <option value="veryActive">veryActive</option>
            <option value="extremelyActive">extremelyActive</option>
        </select>
    
        <label for="gender">Gender</label>
        <select name="gender" id="gender" v-model="gender" >
            <option value="" selected disabled>Your gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>

        <button type="submit">submit</button>
    </form>

   {{calcResult}}


</template>