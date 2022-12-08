<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from "../stores/counter"

export default {
    name: "ExploreView",
    data() {
        return {
            query: "",
            randomSuggestions: ""
        }
    },
    computed: {
        ...mapState(useCounterStore, ["suggestions"])
    },
    methods: {
        ...mapActions(useCounterStore, ["queryObjectDetail", "getSuggestions"]),
        randomizer() {
            let random = Math.round(Math.random() * this.suggestions.length)

            this.randomSuggestions = this.suggestions[random].englishName

            while (this.randomSuggestions.includes("/")) {
                random = Math.round(Math.random() * this.suggestions.length)
                this.randomSuggestions = this.suggestions[random].englishName

            }
            //   console.log(this.randomSuggestions);
        }
    },

    async created() {
        await this.getSuggestions()
        this.randomizer()
    }
}
</script>


<template>
    <div class="background" style="margin-top: 10px;">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form id="explore-form" @submit.prevent="queryObjectDetail(this.query)">

        <p class="title-card text-dark">example: {{ this.randomSuggestions }}</p>

        <input type="text" placeholder="" id="" v-model="query">

        <button type="submit">Explore!</button>
        <!-- <div class="social">
              <div class="go"><i class="fab fa-google"></i>  Google</div>
              <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div> -->
    </form>

</template>
    
<style>
*,
*:before,
*:after {
    padding: 0;
    box-sizing: border-box;
}

.background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}

#explore-form {
    margin-top: 0px;
    height: 250px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

form * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}

input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}

::placeholder {
    color: #e5e5e5;
}

button {
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
</style>