<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    name:"ObjectCard",
    props:["object"],
    methods:{
        ...mapActions(useCounterStore,['getObjectDetail']),
        // getObjectDetailLocal() {
        //     this.getObjectDetail()
        // }

    }
}
</script>

<template>
   <div class="col-md-4 text-center">
      <div class="card" style="width: 18rem;">
  <img style="object-fit:contain;" height="200" width="auto" :src="object.imageUrl" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{object.name}}</h5>
        <p class=" mb-2 text-muted">Discovered By: {{object.discoveredBy}}</p>
        <p class=" mb-2 text-muted">Type: {{object.type}}</p>

    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
       <a href="#" class="btn mr-2 text-light " @click.prevent="getObjectDetail(object.name)"><i class="fas fa-link text-light" ></i> View Detail</a>
    <!-- <a href="#" class="btn "><i class="fab fa-github"></i> Github</a> -->
  </div>
  </div>
    </div>    


</template>


<style>

.card {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

.btn {
  border: 5px solid;
  border-image-slice: 1;
  background: var(--gradient) !important;
  -webkit-background-clip: text !important;
  /* -webkit-text-fill-color: transparent !important; */
  border-image-source:  var(--gradient) !important; 
  text-decoration: none;
  transition: all .4s ease;
}

.btn:hover, .btn:focus {
      background: var(--gradient) !important;
  -webkit-background-clip: none !important;
  -webkit-text-fill-color: #fff !important;
  border: 5px solid #fff !important; 
  box-shadow: #222 1px 0 10px;
  text-decoration: underline;
}
</style>