<script>
export default {
  name: "SelectOption",
  props: ["genre"],
};
</script>

<template>
  <option value="US">{{ genre.name }}</option>
</template>
