<script>
import { usePetStore } from '../stores/counter';
import { mapState } from 'pinia';
export default{
    name: "DetailOngkir",
    computed:{
        ...mapState(usePetStore, ['order'])
    }
}
</script>

<template>
<pre>
    {{order}}
</pre>
<div class="card" style="width: 18rem;" v-for="el in order" :key="el.id">
  <div class="card-body ms-2">
    <h5 class="card-title">{{el.service}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{el.description}}</h6>
    <p class="card-text">Cost: {{el.cost[0].value}}</p>
    <p class="card-text">Estimated: {{el.cost[0].etd}} Days</p>
    <a href="#" class="card-link">Choose</a>
  </div>
</div>
</template>