<script>
import { mapActions, mapWritableState } from "pinia";
import { useChatStore } from "../stores/chat";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export default {
  name: "Chat",
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapWritableState(useChatStore, ["chats"]),
  },
  methods: {
    ...mapActions(useChatStore, ["chatToServer", "myChat", "saveChat"]),
    async sendChat() {
      await this.saveChat(this.text, this.$route.params.id);
      this.$refs.chatForm.reset();
      socket.on("send message", (email) => {
        console.log("masuk on brodcast client", email);
      });
    },
  },
  created() {
    // socket.on("send message", (email) => {
    //   item.textContent = email;
    //   messages.appendChild(item);
    //   window.scrollTo(0, document.body.scrollHeight);
    // });
    this.myChat(this.$route.params.id);
  },
  unmounted() {
    socket.on("disconnect", (reason) => {
      if (reason == "disconnect") console.log("berhasil disconnect user");
    });
  },
};
</script>

<template>
  <div class="container">
    <ul id="messages">
      <li
        class="rounded-pill mb-4"
        v-for="chat in chats"
        :style="{
          textAlign:
            chat.SenderId !== +this.$route.params.id &&
            chat.ReceiverId === +this.$route.params.id
              ? 'left'
              : 'right',
          backgroundColor:
            chat.SenderId !== +this.$route.params.id &&
            chat.ReceiverId === +this.$route.params.id
              ? 'green'
              : 'whitesmoke',
        }"
      >
        {{ chat.text }}
      </li>
    </ul>
    <form @submit.prevent="sendChat" ref="chatForm" id="form">
      <input v-model="text" id="input" autocomplete="off" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding-bottom: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}

#form {
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}
#input {
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;
}
#input:focus {
  outline: none;
}
#form > button {
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  outline: none;
  color: #fff;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages > li {
  padding: 0.5rem 1rem;
}
#messages > li:nth-child(odd) {
  background: #efefef;
}
</style>
