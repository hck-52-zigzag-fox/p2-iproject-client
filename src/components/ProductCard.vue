<script>
import { mapActions } from 'pinia';
import { useStore } from '../stores/store';

export default {
  name: "ProductCard",
  data() {
    return {
      price: ""
    }
  },
  props: ["product"],
  methods: {
    ...mapActions(useStore, ["addOrder"]),
    handleAddOrder() {
      this.addOrder(this.product.code.split("_")[2], "Jakarta")
    }
  }
}
</script>

<template>
  <div class="col-lg-4">
    <div class="item">
      <div class="thumb">
        <div class="hover-content">
          <ul>
            <li><a @click.prevent="handleAddOrder"><i class="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>
        <img :src="product.images[0].url" alt="">
      </div>
      <div class="down-content">
        <h4>{{ product.name }}</h4>
        <span>{{ product.price.formattedValue }}</span>
      </div>
    </div>
  </div>
</template>