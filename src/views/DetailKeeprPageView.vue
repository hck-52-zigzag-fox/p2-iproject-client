<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "DetailKeeprPage",
  computed: {
    ...mapState(useCounterStore, ["keepr", "qr"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useCounterStore, ["detailKeepr", 'showQrCode']),
  },
  created() {
    this.detailKeepr(this.$route.params.id);
    this.showQrCode()
  },
};
</script>

<template>
  <div class="container" style="height: 80vh">
    <h1 class="text-center mt-4">Halo, my name is {{ keepr.name }}</h1>
    <div class="d-flex justify-content-center">
      <img :src="keepr.imageUrl" alt="" width="310" />
      <div class="mt-5">
        <h4>Profil</h4>
        <h6>Gender: {{ keepr.gender }}</h6>
        <h6>Age: {{ keepr.age }}</h6>
        <h6>Experience: {{ keepr.experience }} years</h6>
        <h6>Education: {{ keepr.education }}</h6>
        <h6>Salary: {{ keepr.salary }}</h6>
        <a href="#" class="btn btn-primary">Hire me!</a>
        <div class="py-3">
          <img :src="qr.url" style="width: 90px; height: 90px" />
        </div>
      </div>
    </div>
  </div>
</template>
