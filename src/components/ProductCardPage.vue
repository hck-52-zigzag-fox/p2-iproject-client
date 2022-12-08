<script>
import { usePetStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
export default {
  name: "ProductCardPage",
  props: ["el"],
  methods: {
    ...mapActions(usePetStore, [
      "fetchProduct",
      "addProduct",
      "listWishlist",
      "deleteOrder",
    ]),
    toAddOrder(id) {
      this.addProduct(id, 1);
    },
    toDelete(id) {
      this.deleteOrder(id);
    },
  },
  created() {
    this.listWishlist()
  },
};
</script>

<template>
  <!-- <pre>
    {{wishlist}}
</pre> -->
  <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
    <div class="card rounded shadow-sm border-0">
      <div class="card-body p-4">
        <img
          :src="el?.imageUrl"
          alt=""
          class="img-fluid d-block mx-auto mb-3"
          style="object-fit: cover; width: 100%; height: 100%"
        />
        <h5>
          <a href="#" class="text-dark">{{ el?.name }}</a>
        </h5>
        <h5 class="small text-muted font-italic">{{ el?.price }}</h5>
        <h5 class="small text-muted font-italic">
          Category: {{ el?.Category?.name }}
        </h5>
        <div v-if="this.$route.path == '/product'">
          <i class="bi bi-bag-dash"></i>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click.prevent="toAddOrder(el?.id)"
          >
            Add
          </button>
        </div>
        <div v-if="this.$route.path == '/checkout'">
          <i class="bi bi-bag-dash"></i>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click.prevent="toDelete(el?.id)"
          >
            Delete
          </button>
        </div>
        <ul class="list-inline small">
          <li class="list-inline-item m-0">
            <i class="fa fa-star text-success"></i>
          </li>
          <li class="list-inline-item m-0">
            <i class="fa fa-star text-success"></i>
          </li>
          <li class="list-inline-item m-0">
            <i class="fa fa-star text-success"></i>
          </li>
          <li class="list-inline-item m-0">
            <i class="fa fa-star text-success"></i>
          </li>
          <li class="list-inline-item m-0">
            <i class="fa fa-star-o text-success"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
