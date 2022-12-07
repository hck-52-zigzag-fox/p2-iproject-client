<script>
import { mapActions, mapState } from "pinia";
import Talk from "talkjs";
import { useStore } from "../stores";

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
  },
  async mounted() {
    await Talk.ready;

    const me = new Talk.User({
      id: this.currentUser.id,
      name: this.currentUser.name,
      email: this.currentUser.email,
      photoUrl:
        "https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png",
      role: this.currentUser.role,
    });

    const talkSession = new Talk.Session({
      appId: "tmDSMKZu",
      me: me,
    });

    const other = new Talk.User({
      id: this.otherUser.id,
      name: this.otherUser.name,
      email: this.otherUser.email,
      photoUrl:
        "https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png",
      welcomeMessage: "Hi! may i help you?",
      role: this.otherUser.role,
    });

    const conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );

    conversation.setParticipant(me);
    conversation.setParticipant(other);

    var inbox = talkSession.createInbox();
    inbox.select(conversation);

    inbox.mount(this.$refs.talkjs);
  },
};
</script>

<template>
  <div
    ref="talkjs"
    style="
      width: 90%;
      margin: 30px;
      height: 500px;
      min-height: calc(100vh - 50px - 112px);
    "
  >
    <i>Loading chat...</i>
  </div>
</template>
