<script>
export default {
  name: "CardCourse",
  props: ["data"],
};
</script>

<template>
  <div class="max-w-sm rounded-sm overflow-hidden shadow-lg">
    <img :src="data?.thumbnail" :alt="data?.name" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 capitalize">{{ data?.name }}</div>
      <p class="text-gray-700 text-sm">
        Mentor: <span class="underline">{{ data?.Mentor?.name }}</span>
      </p>
      <p>
        {{ data?.description }}
      </p>
      <p>Rp. {{ data?.price }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-orange-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ data?.type }}</span
      >
      <span
        class="inline-block bg-teal-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ data?.level }}</span
      >
    </div>
  </div>
</template>
