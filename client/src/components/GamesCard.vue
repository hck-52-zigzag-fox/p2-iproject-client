<script>
export default {
  name: "GamesCard",
  props: ["game"],
};
</script>
<template>
  <div>
    <div class="p-5 bg-white rounded-xl items-center mb-5">
      <div class="flex justify-center">
        <img class="rounded-xl w-52 h-52" :src="game.thumbnail" alt="" />
      </div>
      <div class="p-2">
        <h2 class="font-bold text-lg">{{ game.title }}</h2>
        <p class="text-sm text-gray-600">{{ game.short_description }}</p>
      </div>
      <div class="m-2">
        <p class="text-sm text-gray-600">Genre : {{ game.genre }}</p>
        <p class="text-sm text-gray-600">
          Release Date : {{ game.release_date }}
        </p>
        <p class="text-sm text-gray-600">Game Url : {{ game.game_url }}</p>
      </div>
    </div>
  </div>
</template>
