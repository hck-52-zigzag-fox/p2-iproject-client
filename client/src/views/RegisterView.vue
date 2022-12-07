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

    <h1>ini register</h1>

    <form action="" @submit.prevent="register(dataForm)">

        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="dataForm.email" >
    
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="dataForm.password" >
    
        <label for="gender">Gender</label>
        <select name="gender" id="gender" v-model="dataForm.gender">
            <option value="" selected disabled>Your gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
    
        <label for="age">Age</label>
        <input type="number" name="age" id="age" v-model="dataForm.age">
    
        <label for="weight">Weight</label>
        <input type="number" name="weight" id="weight" v-model="dataForm.weight">
    
        <label for="height">Height</label>
        <input type="number" name="height" id="height" v-model="dataForm.height">
    
        <label for="weeklyPhysicalActivity">Weekly Physical Activity</label>
        <select name="weeklyPhysicalActivity" id="weeklyPhysicalActivity" v-model="dataForm.weeklyPhysicalActivity">
            <option value="" selected disabled>Your Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extremelyActive">Extremely Active</option>
        </select>
        
        <button type="submit">submit</button>

    </form>

</template>