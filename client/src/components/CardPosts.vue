<script>
import { mapActions } from "pinia";
import { useRzStore } from "../stores/counter";

export default {
  name: "CardPosts",
  props: ["post"],
  methods: {
    ...mapActions(useRzStore, ["timeAgo"]),
  },
};
</script>
<template>
  <div class="card w-full bg-base-100 shadow-xl mb-5">
    <div class="avatar mt-5 px-5">
      <div class="w-24 rounded-full">
        <RouterLink :to="`/profiles/${post.UserId}`" href="">
          <img :src="post.User.Profile.imgUrl" alt="" class="w-16 h-16" />
        </RouterLink>
      </div>
    </div>
    <div class="card-body">
      <h2 class="card-title">
        {{ post.User.username }} {{ timeAgo(post.createdAt) }}
      </h2>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>
