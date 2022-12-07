<script>
import { mapActions } from 'pinia';
import { useCicoStore } from '../stores/cico';

export default {
    name: 'Login',
    data() {
        return {
            dataForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useCicoStore, ['login'])
    }
}
</script>

<template>

    <h1>ini login</h1>
    <form action="" @submit.prevent="login(dataForm)" >
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="dataForm.email" >

        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="dataForm.password">

        <button type="submit">submit</button>
    </form>

</template>