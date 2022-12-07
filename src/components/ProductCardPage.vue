<script>
import { usePetStore } from "../stores/counter";
import { mapActions } from "pinia";
export default {
  name: "ProductCardPage",
  props: ["el"],
  methods: {
    ...mapActions(usePetStore, ["fetchProduct"]),
  },
  created() {
    this.fetchProduct();
  },
};
</script>

<template>
  <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
    <div class="card rounded shadow-sm border-0">
      <div class="card-body p-4">
        <img :src="el.imageUrl" alt="" class="img-fluid d-block mx-auto mb-3" 
        style="object-fit:cover ; width:100%; height:100%" />
        <h5>
          <a href="#" class="text-dark">{{ el.name }}</a>
        </h5>
        <h5 class="small text-muted font-italic">Rp.{{ el.price }}.000</h5>
        <h5 class="small text-muted font-italic">
          Category: {{ el.Category.name }}
        </h5>
        <div>
            <i class="bi bi-bag-dash"></i>
            <ion-icon width="100px" name="cart"></ion-icon>
            <button type="button" class="btn btn-primary btn-sm">Add</button>
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
