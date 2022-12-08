<script>
export default {
  name: "InputVue",
  props: ["name", "type", "placeholder"],
};
</script>

<template>
  <input
    :name="name"
    :type="type"
    class="bg-white focus:outline-none border w-full px-4 py-3 border-gray-600 focus:border-teal-500"
    :placeholder="placeholder"
  />
</template>
