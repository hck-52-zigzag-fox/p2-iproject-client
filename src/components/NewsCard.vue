<script>
export default {
    name: 'NewsCard',
    props: ['news']
}
</script>

<template>
    <div
        class="bg-image card"
        :style="{backgroundImage: 'url('+ news.image.thumbnail.contentUrl +')', backgroundSize: 'cover', width: '18rem', height:'18rem'}"
      >
        <div
          class="card-body text-white d-flex flex-column justify-content-end"
        >
          <h3 class="card-title fs-6">{{news.name}}</h3>
          <div class="d-flex justify-content-between">
            <a :href="news.url" class="btn btn-outline-danger">Read</a>
          </div>
        </div>
      </div>
</template>
