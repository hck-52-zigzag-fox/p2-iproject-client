<script>
// origin, destination,weight,courier
import { usePetStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import DetailOngkir from "../components/DetailOngkir.vue";
export default {
  name: "OrderView",
  data() {
    return {
      input: {
        origin: "",
        destination: "",
        weight: "",
        courier: "",
      },
    };
  },
  computed: {
    ...mapState(usePetStore, ["city", "order"]),
  },
  methods: {
    ...mapActions(usePetStore, ["ongkir", "getOngkir"]),
  },
  created() {
    this.getOngkir();
  },
  components: { DetailOngkir },
};
</script>

<template>
  <section class="h-100 h-custom" style="background-color: #8fc4b7">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <h2>Delivery Order</h2>
            <div class="card-body p-4 p-md-5">
              <form class="px-md-2" @submit.prevent="ongkir(input)">
                <label class="form-label" for="form3Example1q">Origin</label>
                <br />
                <select
                  class="form-outline mb-4"
                  aria-label=".form-select-sm example"
                  v-model="input.origin"
                >
                  <option v-for="el in city" :key="el.id" :value="el.city_id">
                    {{ el.city_name }}
                  </option>
                </select>
                <br />
                <label class="form-label" for="form3Example1q"
                  >Destination</label
                >
                <br />
                <select
                  class="form-outline mb-4"
                  aria-label=".form-select-sm example"
                  v-model="input.destination"
                >
                  <option v-for="el in city" :key="el.id" :value="el.city_id">
                    {{ el.city_name }}
                  </option>
                </select>
                <br />
                <label class="form-label" for="form3Example1w">weight</label>
                <div class="form-outline mb-4">
                  <input
                    type="number"
                    id="form3Example1q"
                    class="form-control"
                    v-model="input.weight"
                  />
                </div>
                <label class="form-label" for="form3Example1w">Courier</label>
                <br />
                <select
                  class="form-outline mb-4"
                  aria-label=".form-select-sm example"
                  v-model="input.courier"
                >
                  <option value="jne">JNE</option>
                  <option value="pos">POS</option>
                  <option value="tiki">TIKI</option>
                </select>
                <br />
                <pre></pre>
                <button type="submit" class="btn btn-success btn-lg mb-1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center h-100" >
      <DetailOngkir />
    </div>
  </section>
</template>
