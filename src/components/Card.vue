<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: "Card",
  props: ["keepr"],
  methods:{
    ...mapActions(useCounterStore,['handlePayment'])
  }
};
</script>

<template>
  <div class="col-md-3">
    <div class="card shadow mt-3" style="width: 16rem">
      <img :src="keepr.imageUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ keepr.name }}</h5>
        <p class="card-text">{{ keepr.salary }}/month</p>
        <div>
          <p>Specialist: {{ keepr.Category.name }}</p>
          <p>Experience: {{ keepr.experience }} years</p>
        </div>
        <div class="d-flex justify-content-between">
          <a
            @click.prevent="$router.push(`/keepr/${keepr.id}`)"
            class="btn btn-primary"
            >Details</a
          >
          <a @click.prevent="handlePayment(keepr.id)" class="btn btn-primary">Hire me!</a>
        </div>
      </div>
    </div>
  </div>
</template>
