<script>
import { mapActions, mapState } from "pinia";
import Talk from "talkjs";
import Inbox from "../components/Inbox.vue";
import { useStore } from "../stores";

export default {
  name: "ChatPage",
  components: { Inbox },
  computed: {
    ...mapState(useStore, ["currentUser", "otherUser"]),
  },
  methods: {
    ...mapActions(useStore, ["fetchOrders", "getOrderChat"]),
    async loadDataOrder() {
      await this.fetchOrders();
      this.getOrderChat(+this.$route.params.id);
    },
  },
  created() {
    this.loadDataOrder();
  },
};
</script>

<template>
  <Inbox :currentUser="currentUser" :otherUser="otherUser" />
</template>
