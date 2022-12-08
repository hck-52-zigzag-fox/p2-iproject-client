<script>
import { mapActions, mapState } from "pinia";
import Inbox from "../components/Inbox.vue";
import { useStore } from "../stores";

export default {
  name: "ChatPage",
  components: { Inbox },
  data() {
    return {
      newOther: {},
      newOrder: {},
    };
  },
  computed: {
    ...mapState(useStore, ["currentUser", "otherUser", "order", "loading"]),
  },
  watch: {
    otherUser(newVal, oldVal) {
      this.newOther = newVal;
    },
    newOrder(newVal, oldVal) {
      this.newOrder = newVal;
    },
  },
  methods: {
    ...mapActions(useStore, ["fetchOrders", "getOrderChat", "getOrderById"]),
  },
  async created() {
    // this.loadDataOrder();
    await this.fetchOrders();
    this.getOrderChat(+this.$route.params.id);
    this.getOrderById(this.$route.params.id)
  },
};
</script>

<template>
  <Inbox v-if="!loading" :currentUser="currentUser" :otherUser="newOther" />
</template>
