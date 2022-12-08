<script>
// import { mapActions, mapWritableState } from "pinia";
// import { useChatStore } from "../stores/chat";
import Navbar from "./Navbar.vue";
import Talk from "talkjs";

export default {
  name: "Inbox",
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
    otherUser: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
    },
  },
  components: {
    Navbar,
  },
  async mounted() {
    await Talk.ready;
    const me = new Talk.User({
      id: this.currentUser.id,
      name: "user",
      email: this.currentUser.email,
      welcomeMessage: "Hey there! How are you? :-)",
      role: this.currentUser.role,
      locale:'en-EN'
    });

    const other = new Talk.User({
      id: this.otherUser.User.id,
      name: this.otherUser.name,
      email: this.otherUser.User.email,
      photoUrl: this.otherUser.imageUrl,
      welcomeMessage: "Hey, how can I help?",
      role: this.otherUser.role,
      locale:'en-EN'
    });

    const talkSession = new Talk.Session({
      appId: "tr7N6Kic",
      me: localStorage.role == 'customer' ? me : other,
    });


    const conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );

    conversation.setParticipant(me);
    conversation.setParticipant(other);

    const inbox = talkSession.createInbox();
    inbox.select(conversation);

    // if(this.id === +this.$route.params.id){
    inbox.mount(this.$refs.talkjs);
    // }
  },
};
</script>

<template>
  <div class="container-chat">
    <div ref="talkjs" style="width: 90%; margin: 30px; height: 500px">
      <i>Loading chat...</i>
    </div>
  </div>
</template>
