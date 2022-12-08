<script>
export default {
  name: "ButtonVue",
  props: ["title", "type"],
};
</script>

<template>
  <button
    :type="type"
    class="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
  >
    {{ title }}
  </button>
</template>
