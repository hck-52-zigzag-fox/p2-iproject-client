<script>
import { usePetStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import DetailOngkir from "./DetailOngkir.vue";
export default {
  name: "DeliveryOrder",
  data() {
    return {
      input: {
        origin: "",
        destination: "",
        weight: "",
        courier: "",
      },
      shipping: 0
    };
  },
  computed: {
    ...mapState(usePetStore, ["city", "order", "totalPrice"]),
  },
  methods: {
    ...mapActions(usePetStore, ["ongkir", "getOngkir", "listWishlist", 'payment']),
    changeShipping(val) {
      this.shipping = val
    },
    checkOut(){
      this.payment(this.totalPrice,this.shipping)
    }
  },
  created() {
    this.getOngkir();
    this.listWishlist()
  },
  components: { DetailOngkir },
};
</script>

<template>
  <section
    class="h-100 h-custom"
    style="background-image: url('../assets/petshop-indonesia-grooming-kucing-anjing-memandikan-hewan-peliharaan-list1ddad.webp')"
  >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <br />
            <br />
            <center>
              <h2>Choose Delivery Order</h2>
            </center>
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
                <label class="form-label" for="form3Example1w"
                  >Weight(kg)</label
                >
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
            <center>
              <DetailOngkir @onChangeShipping="changeShipping" />
            </center>
            <br>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="justify-content-center">
        <center>
          <h4>Total Price : {{ totalPrice + shipping }}</h4>
        </center>
        <RouterLink to="/order" class="text-decoration-none">
          <div class="d-grid gap-2 col-6 mx-auto" @submit.prevent="payment">
            <button class="btn btn-primary" type="button" @click="checkOut" >
              <ion-icon name="cart-outline"></ion-icon> Checkout and Go to
              payment
            </button>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
