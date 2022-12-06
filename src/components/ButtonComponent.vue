<script>
export default {
  name: "ButtonComponent",
  props: ["page"],
};
</script>
<template>
  <div class="d-grid">
    <button type="submit" class="btn btn-lg btn-primary">{{ page }}</button>
  </div>
</template>
