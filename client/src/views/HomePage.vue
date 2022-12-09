<script>
import { mapActions, mapState } from "pinia";
import { useRzStore } from "../stores/counter";
import CardPosts from "../components/CardPosts.vue";

export default {
  name: "HomePage",
  data() {
    return {
      content: "",
    };
  },
  components: {
    CardPosts,
  },
  computed: {
    ...mapState(useRzStore, ["posts"]),
  },
  methods: {
    ...mapActions(useRzStore, ["addPost", "fetchPosts"]),
    async addpost(content) {
      await this.addPost(content);
      this.content = "";
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>
<template>
  <div class="col-span-2 px-12">
    <div class="w-auto mb-5 mt-5 bg-white rounded-xl">
      <form @submit.prevent="addpost(content)">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Post something nice for today</label
        >
        <textarea
          id="message"
          rows="4"
          v-model="content"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your content here..."
        ></textarea>
        <button
          type="submit"
          class="bg-gray-500 w-1/3 text-gray-100 py-2 rounded hover:bg-gray-600 transition-colors mb-4"
        >
          Submit Post
        </button>
      </form>
    </div>
    <CardPosts v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
