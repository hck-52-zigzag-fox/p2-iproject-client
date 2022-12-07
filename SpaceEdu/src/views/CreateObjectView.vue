<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    name: "CreateObjectView",
    data(){
        return{
            input: {
                name:"",
                type:"",
                appearance:""
            }
        }
    },
    methods:{
        ...mapActions(useCounterStore,['createObject'])
    }
}
</script>

<template>
    <div class="background" style="margin-top: 100px;">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form @submit.prevent="createObject(input)">
        <h3>Create Object</h3>

        <label for="username">Name</label>
        <input type="text" placeholder="Name" id="username" v-model="input.name">

        <label for="type">Type</label>
        <select name="type" id="type" v-model="input.type">
            <option value="" selected disabled>Choose Type</option>

            <option class="text-light bg-dark" value="Dwarf Planet">Dwarf Planet</option>
            <option class="text-light bg-dark" value="Planet">Planet</option>
            <option class="text-light bg-dark" value="Star">Star</option>
            <option class="text-light bg-dark" value="Moon">Moon</option>
        </select>


        <div class="container text-center">
            
            <h5 style="margin-top: 80px;">Select Appearance</h5>
            <div class="d-flex justify-content-around">

                <div class="d-flex align-items-center">
                    <label for=""><img style="object-fit:contain;" height="150" width="auto"
                            src="https://i.ibb.co/jzpPMCj/purple-planet.png" alt="purple-planet" border="0">Purple Planet</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="purple-planet"
                        value="https://i.ibb.co/jzpPMCj/purple-planet.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="space-uranus"><img style="object-fit:contain;" height="90" width="auto"
                            src="https://i.ibb.co/Y00qk9n/space-uranus.png" alt="space-uranus" border="0">Space Uranus</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="space-uranus"
                        value="https://i.ibb.co/Y00qk9n/space-uranus.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="full-moon-impact"><img style="object-fit:contain;" height="100" width="auto"
                            src="https://i.ibb.co/9WkbWpL/full-moon-impact.png" alt="full-moon-impact"
                            border="0">Full Moon Impact</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="full-moon-impact"
                        value="https://i.ibb.co/9WkbWpL/full-moon-impact.png"> -->
                </div>
            </div>

            <div class="d-flex justify-content-around">

                <div class="d-flex align-items-center">
                    <label for="ocean-blue"><img style="object-fit:contain;" height="120" width="auto"
                            src="https://i.ibb.co/dK25SV0/ocean-blue.png" alt="ocean-blue" border="0">Ocean Blue</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="ocean-blue"
                        value="https://i.ibb.co/dK25SV0/ocean-blue.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="purple-moon"><img style="object-fit:contain;" height="100" width="auto"
                            src="https://i.ibb.co/ByzW15K/purple-moon.png" alt="purple-moon" border="0">Purple Moon</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="purple-moon"
                        value="https://i.ibb.co/ByzW15K/purple-moon.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="sky-blue"><img style="object-fit:contain;" height="100" width="auto"
                            src="https://i.ibb.co/71y43qx/sky-blue.png" alt="sky-blue" border="0">Sky Blue</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="sky-blue"
                        value="https://i.ibb.co/71y43qx/sky-blue.png"> -->
                </div>
            </div>

            <div class="d-flex justify-content-around">

                <div class="d-flex align-items-center">
                    <label for="cybertron"><img style="object-fit:contain;" height="120" width="auto"
                            src="https://i.ibb.co/j3wZTBK/cybertron.png" alt="cybertron" border="0">Cybertron</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="cybertron"
                        value="https://i.ibb.co/j3wZTBK/cybertron.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="coruscant"><img style="object-fit:contain;" height="100" width="auto"
                            src="https://i.ibb.co/M5bCndm/coruscant.png" alt="coruscant" border="0">Coruscant</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="coruscant"
                        value="https://i.ibb.co/M5bCndm/coruscant.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="ceres-like"><img style="object-fit:contain;" height="100" width="auto"
                            src="https://i.ibb.co/ZfmPhFp/ceres-like.png" alt="ceres-like" border="0">Ceres Like</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="ceres-like"
                        value="https://i.ibb.co/ZfmPhFp/ceres-like.png"> -->
                </div>
            </div>

            <div class="d-flex justify-content-around">

                <div class="d-flex align-items-center">
                    <label for="light-sun"><img style="object-fit:contain;" height="120" width="auto"
                            src="https://i.ibb.co/xqFMNck/light-sun.png" alt="light-sun" border="0">Light Sun</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="light-sun"
                        value="https://i.ibb.co/xqFMNck/light-sun.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="fireball"><img style="object-fit:contain;" height="100" width="auto"
                            src="https://i.ibb.co/G50fvmH/fireball.png" alt="fireball" border="0">Fireball</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="fireball"
                        value="https://i.ibb.co/G50fvmH/fireball.png"> -->
                </div>

                <div class="d-flex align-items-center">
                    <label for="deathstar"><img style="object-fit:contain;" height="100" width="auto"
                            src="https://i.ibb.co/BrPWXSG/deathstar.png" alt="deathstar" border="0">Deathstar</label>
                    <!-- <input class="form-check-input radio" type="radio" name="imageUrl" id="deathstar"
                        value="https://i.ibb.co/BrPWXSG/deathstar.png"> -->
                </div>
            </div>
        </div>

        <label for="type">Appearance</label>
        <select name="type" id="type" v-model="input.appearance">
            <option value="" selected disabled>Choose Appearance</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/jzpPMCj/purple-planet.png">Purple Planet</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/Y00qk9n/space-uranus.png">Space Uranus</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/9WkbWpL/full-moon-impact.png">Full Moon Impact</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/dK25SV0/ocean-blue.png">Ocean Blue</option>

            <option class="text-light bg-dark" value="https://i.ibb.co/ByzW15K/purple-moon.png">Purple Moon</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/71y43qx/sky-blue.png">Sky Blue</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/j3wZTBK/cybertron.png">Cybertron</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/M5bCndm/coruscant.png">Coruscant</option>

            <option class="text-light bg-dark" value="https://i.ibb.co/ZfmPhFp/ceres-like.png">Ceres Like</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/xqFMNck/light-sun.png">Light Sun</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/G50fvmH/fireball.png">Fireball</option>
            <option class="text-light bg-dark" value="https://i.ibb.co/BrPWXSG/deathstar.png">Deathstar</option>
        </select>

        <button>Create</button>
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

form {
    margin-top: 350px;
    height: 1200px;
    width: 1000px;
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

input,
select,
option {
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

.social {
    margin-top: 30px;
    display: flex;
}

.social div {
    background: red;
    width: 150px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
}

.social div:hover {
    background-color: rgba(255, 255, 255, 0.47);
}

.social .fb {
    margin-left: 25px;
}

.social i {
    margin-right: 4px;
}
</style>