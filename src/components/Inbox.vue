<script>
import Talk from "talkjs";

export default {
  name: "Inbox",
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
    methods: {
      showConversation() {},
    },
  },
  async mounted() {
    await Talk.ready;
    const me = new Talk.User({
      id: this.currentUser.id,
      name: this.currentUser.name,
      email: this.currentUser.email,
      photoUrl: this.currentUser.photoUrl,
      role: this.currentUser.role,
    });

    const talkSession = new Talk.Session({
      appId: "tmDSMKZu",
      me: me,
    });

    const other = new Talk.User({
      id: "4",
      name: "Admin",
      email: "admin@gmail.com",
      photoUrl:
        "https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png",
      role: "Admin",
    });

    const conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );

    conversation.setParticipant(me);
    conversation.setParticipant(other);

    const popup = talkSession.createPopup();
    popup.select(conversation);
    popup.mount({ show: false });

    const button = document.getElementById("btn-getInTouch");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      popup.show();
    });

    // const chatbox = talkSession.createChatbox();
    // chatbox.select(conversation);
    // chatbox.mount(document.getElementById("talkjs-container"));
  },
};
</script>

<template>
  <div ref="talkjs" style="width: 90%"></div>
</template>
