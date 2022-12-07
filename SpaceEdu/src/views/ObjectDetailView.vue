<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from "../stores/counter"
import PictureCard from '../components/PictureCard.vue';

export default {
    name: "ObjectDetail",
    data(){
        return {
            semiMajorAxis : 0,
            massValue:0,
            volumeValue:0,
            density:0,
            gravity:0,
            discoveredBy:"Unknown",
            discoveryDate:"Unknown"
        }
    },
    components:{
        PictureCard
    },
    computed: {
        ...mapState(useCounterStore, ["objectDetail"])
    },
    methods: {
        ...mapActions(useCounterStore, ["getObjectDetail"]),

        numberFormatter(number){
            return new Intl.NumberFormat().format(number)
        }

    },

    async created() {

       await this.getObjectDetail(this.$route.params.name)
       this.semiMajorAxis = this.numberFormatter(this.objectDetail.detailObject[0].semimajorAxis)
    //    console.log(this.objectDetail.detailObject[0].mass.massValue);
       this.massValue = this.numberFormatter(this.objectDetail.detailObject[0].mass.massValue * Math.pow(10,this.objectDetail.detailObject[0].mass.massExponent ))
        // console.log(this.objectDetail.detailObject, "test");
       this.volumeValue = this.numberFormatter(this.objectDetail.detailObject[0].vol.volValue * Math.pow(10,this.objectDetail.detailObject[0].vol.volExponent ))
       this.density = this.numberFormatter(this.objectDetail.detailObject[0].density)
       this.gravity = this.numberFormatter(this.objectDetail.detailObject[0].gravity)

       this.objectDetail.detailObject[0].discoveredBy? this.discoveredBy = this.objectDetail.detailObject[0].discoveredBy : ""
       this.objectDetail.detailObject[0].discoveryDate? this.discoveryDate = this.objectDetail.detailObject[0].discoveryDate : ""
       

    }
}
</script>


<template>
    <div class="col-md-8 blog-main container justify-content-center" style="margin-top: 50px; margin-bottom: 100px">


        <div class="blog-post bg-light container">
            <h2 class="blog-post-title">{{ objectDetail.detailObject[0].englishName }}</h2>

            <hr>

            <h2>Archive</h2>
            <div class="d-flex row">

                    <PictureCard v-for="news in objectDetail.pictures" :news="news"/>


                
            </div>
            
        </div><!-- /.blog-post -->

        <div class="blog-post bg-light text-center" style="margin-bottom: 100px;">

            <h2>Physical Feature</h2>
            <p class="card-title">Mass: {{massValue}} Kg</p>
            <p class="card-title">Volume: {{volumeValue}} Km cubic</p>
            <p class="card-title">Density: {{density}} Kg/m cubic</p>
            <p class="card-title">Type: {{this.objectDetail.detailObject[0].bodyType}}</p>
          





            <br>

            <h2>Non-Physical Feature</h2>
            <p class="card-title">Semi Major Axis: {{semiMajorAxis}} Km</p>
            <p class="card-title">Gravity: {{gravity}} m/s2 cubic</p>
            <p class="card-title">Average Temp: {{this.objectDetail.detailObject[0].avgTemp}} Kelvin</p>
            <p class="card-title">Discovered By: {{discoveredBy}}</p>
            <p class="card-title">Discovery Date: {{discoveryDate}}</p>






           
            <div v-if="objectDetail.detailObject[0].moons">
                <h3>Satellites</h3>
                <div v-for="(satellite,index) in objectDetail.detailObject[0].moons" :key="satellite.id">
                    <p>{{index+1}}. {{ satellite.moon }}</p>

                </div>

            </div>
            <br>
            <br>
        </div><!-- /.blog-post -->

      



    </div>

</template>