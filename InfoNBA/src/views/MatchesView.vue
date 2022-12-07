<script>
import YouTube from "vue3-youtube";

export default {
  name: "Match",
  components: { YouTube },
};
</script>

<template>
  <div class="container">
    <div class="d-flex" style="gap: 50px; padding-bottom: 50px">
      <YouTube
        src="https://www.youtube.com/embed/utWlBdgYhFo"
        @ready="onReady"
        ref="youtube"
      />
      <YouTube
        src="https://www.youtube.com/embed/Pw69vSviVpw"
        @ready="onReady"
        ref="youtube"
      />
    </div>

    <div class="d-flex" style="gap: 50px">
      <YouTube
        src="https://www.youtube.com/embed/3Vcw-Yed-gM"
        @ready="onReady"
        ref="youtube"
      />
      <YouTube
        src="https://www.youtube.com/embed/0Cxv9jhJx3o"
        @ready="onReady"
        ref="youtube"
      />
    </div>
  </div>
</template>
