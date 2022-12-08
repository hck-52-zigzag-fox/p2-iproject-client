<script>
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores";
import NotFoundPage from "../views/NotFoundPage.vue";

export default {
  name: "DetailOrder",
  components: {
    NotFoundPage,
  },
  data() {
    return {
      order: {},
    };
  },
  watch: {
    orders(newVal, oldVal) {
      newVal.forEach((el) => {
        if (el.id == this.$route.params.id) {
          this.order = el;
        }
      });
    },
  },
  computed: {
    ...mapState(useStore, ["orders"]),
  },
  methods: {
    ...mapActions(useStore, ["fetchOrders"]),
  },
  created() {
    this.fetchOrders();
  },
};
</script>

<template>
  <div v-if="!order.id">
    <NotFoundPage :type="'Order'" />
  </div>

  <div v-if="order.id" class="card" style="min-height: calc(100vh - 52.5px - 50px);">
    <div class="container-fliud">
      <div class="wrapper row">
        <div class="preview col-md-6">
          <div class="preview-pic tab-content">
            <div class="tab-pane active" id="pic-1">
              <img style="height: 600px; object-fit: cover;" :src="order.Item.imageUrl" />
            </div>
            <div class="tab-pane" id="pic-2">
              <img style="height: 600px; object-fit: cover;" :src="order.Item.imageUrl" />
            </div>
            <div class="tab-pane" id="pic-3">
              <img style="height: 600px; object-fit: cover;" :src="order.Item.imageUrl" />
            </div>
            <div class="tab-pane" id="pic-4">
              <img style="height: 600px; object-fit: cover;" :src="order.Item.imageUrl" />
            </div>
            <div class="tab-pane" id="pic-5">
              <img style="height: 600px; object-fit: cover;" :src="order.Item.imageUrl" />
            </div>
          </div>
        </div>
        <div class="details col-md-6 d-flex-column justify-content-between">
          <div>
            <div class="d-flex justify-content-between">
              <h3 class="product-title">{{ order.Item.name }}</h3>
            </div>
            <p class="product-description">
              {{ order.Item.description }}
            </p>
            <h4 class="price">
              current price:
              <span>Rp {{ order.Item.price.toLocaleString("id-ID") }},-</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: "open sans";
  overflow-x: hidden;
}

img {
  max-width: 100%;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: 100%;
  -webkit-animation-name: opacity;
  animation-name: opacity;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.checked,
.price span {
  color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart,
.like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.add-to-cart:hover,
.like:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
