<script>
export default {
  name: "CardPosts",
  props: ["post"],
};
</script>
<template>
  <div class="w-auto p-2 bg-white rounded-xl mb-5">
    <div class="">
      <img :src="post.User.Profile.imgUrl" alt="" class="w-16 h-16" />
      <h1>{{ post.User.username }}</h1>
    </div>
    <div>{{ post.content }}</div>
  </div>
</template>
