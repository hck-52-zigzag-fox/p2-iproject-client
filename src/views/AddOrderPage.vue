<script>
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores";
import NotFoundPage from "../views/NotFoundPage.vue";

export default {
  name: "AddOrderPage",
  components: {
    NotFoundPage,
  },
  data() {
    return {
      input: {
        addPrice: 0,
        addDetail: "",
      },
      item: {},
    };
  },
  watch: {
    items(newVal, oldVal) {
      newVal.forEach((el) => {
        if (el.id == this.$route.params.id) {
          this.item = el;
        }
      });
    },
  },
  computed: {
    ...mapState(useStore, ["currentUser", "items"]),
  },
  methods: {
    ...mapActions(useStore, ["addOrder", "fetchItems"]),
    inputDetail(event) {
      this.input.addDetail = event.target.value;
    },
    getOrder() {
      let input = {
        additionalPrice: this.input.addPrice,
        additionalDetail: this.input.addDetail,
        ItemId: this.$route.params.id,
      };
      // this.addOrder(input);
      this.addOrder(input)
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<template>
  <NotFoundPage v-if="!item.name" :type="'Item'" />

  <div v-if="item.name" style="min-height: calc(100vh - 50px - 52.5px)">
    <section class="payment-form dark">
      <div class="container">
        <div class="block-heading">
          <h2 v-if="currentUser.role === 'Customer'">Request Form</h2>
          <h2 v-if="currentUser.role === 'Admin'">Order Form</h2>
        </div>
        <form @submit.prevent="getOrder">
          <div class="products">
            <h3 class="title">Estimated price</h3>
            <div class="item">
              <span class="price"
                >Rp {{ item.price.toLocaleString("id-ID") }},-</span
              >
              <p class="item-name">{{ item.name }}</p>
              <p class="item-description">{{ item.description }}</p>
            </div>
            <div class="item" v-if="currentUser.role === 'Admin'">
              <span class="price">$120</span>
              <p class="item-name">Additional Price</p>
              <p class="item-description">Lorem ipsum dolor sit amet</p>
            </div>
            <div class="total" v-if="currentUser.role === 'Admin'">
              Total<span class="price">$320</span>
            </div>
          </div>
          <div class="card-details">
            <h3 class="title">Order detail</h3>
            <div class="row">
              <!-- form group for admin -->
              <div>
                <div v-if="currentUser.role === 'Admin'" class="form-group">
                  <label for="card-holder">Additional Price</label>
                  <input
                    id="card-holder"
                    type="text"
                    class="form-control"
                    placeholder="Card Holder"
                    aria-label="Card Holder"
                    aria-describedby="basic-addon1"
                    v-model="addPrice"
                  />
                </div>
                <!-- Customer -->
                <div class="form-group">
                  <label for="card-number">Additional Detail</label>
                  <textarea
                    id="card-holder"
                    type="text"
                    class="form-control"
                    placeholder="Describe your request here ..."
                    aria-label="Card Holder"
                    aria-describedby="basic-addon1"
                    @input="inputDetail"
                  ></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-secondary btn-block">
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.payment-form {
  font-family: "Montserrat", sans-serif;
}

.payment-form.dark {
  background-color: white;
}

.payment-form .content {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  background-color: white;
}

.payment-form .block-heading {
  padding-top: 50px;
  margin-bottom: 40px;
  text-align: center;
}

.payment-form .block-heading p {
  text-align: center;
  max-width: 420px;
  margin: auto;
  opacity: 0.7;
}

.payment-form.dark .block-heading p {
  opacity: 0.8;
}

.payment-form .block-heading h1,
.payment-form .block-heading h2,
.payment-form .block-heading h3 {
  margin-bottom: 1.2rem;
  color: gray;
}

.payment-form form {
  border-top: 2px solid gray;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  background-color: #ffffff;
  padding: 0;
  max-width: 600px;
  margin: auto;
}

.payment-form .title {
  font-size: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.8em;
  font-weight: 600;
  padding-bottom: 8px;
}

.payment-form .products {
  background-color: #f7fbff;
  padding: 25px;
}

.payment-form .products .item {
  margin-bottom: 1em;
}

.payment-form .products .item-name {
  font-weight: 600;
  font-size: 0.9em;
}

.payment-form .products .item-description {
  font-size: 0.8em;
  opacity: 0.6;
}

.payment-form .products .item p {
  margin-bottom: 0.2em;
}

.payment-form .products .price {
  float: right;
  font-weight: 600;
  font-size: 0.9em;
}

.payment-form .products .total {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding-top: 19px;
  font-weight: 600;
  line-height: 1;
}

.payment-form .card-details {
  padding: 25px 25px 15px;
}

.payment-form .card-details label {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #79818a;
  text-transform: uppercase;
}

.payment-form .card-details button {
  margin-top: 0.6em;
  padding: 12px 0;
  font-weight: 600;
}

.payment-form .date-separator {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
}

@media (min-width: 576px) {
  .payment-form .title {
    font-size: 1.2em;
  }

  .payment-form .products {
    padding: 40px;
  }

  .payment-form .products .item-name {
    font-size: 1em;
  }

  .payment-form .products .price {
    font-size: 1em;
  }

  .payment-form .card-details {
    padding: 40px 40px 30px;
  }

  .payment-form .card-details button {
    margin-top: 2em;
  }
}
</style>
