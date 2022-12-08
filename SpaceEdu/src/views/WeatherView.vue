<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from "../stores/counter.js"

export default {
    name: "WeatherView",
    data() {
        return {
            city: ""
        }
    },
    computed: {
        ...mapState(useCounterStore, ["weather"])
    },
    methods: {
        ...mapActions(useCounterStore, ['checkWeather'])
    },
    created(){
        this.checkWeather()
    }

}
</script>

<template>

    <div class="background" style="margin-top: 100px;">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div id="weather-search" class="text-light text-center" @submit.prevent="checkWeather(city)">

       


        <!-- {{ weather }} -->
        <!-- <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div> -->

       <p class="title-card">Today's weather in Jakarta: {{weather.weatherInfo.description}}</p>
       <p class="title-card">Wind's speed at: {{weather.wind.speed}}m/s</p>
       <p class="title-card">Temps's at: {{weather.main.temp}} degree celcius</p>
       <p class="title-card">Humidity's at: {{weather.main.humidity}}%</p>
       <img :src="weather.imageUrl" alt="">






      
    </div>

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

#weather-search {
    margin-top: 50px;
    height: 320px;
    width: 500px;
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