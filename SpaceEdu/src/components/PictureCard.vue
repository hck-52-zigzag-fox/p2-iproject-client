<script>


export default {
    name: "PictureCard",
    props:["news"],
    data(){
        return {
            date:this.news.data[0].date_created.substr(0,10)
        }
    }
}
</script>

<template>
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <!-- <strong class="d-inline-block mb-2 text-primary">World</strong> -->
              <h3 class="mb-0">
                <a class="text-white" href="#">{{news.data[0].title}}</a>
              </h3>
              <div class="mb-1 text-muted">{{date}}</div>
              <p class="card-text mb-auto">{{news.data[0].description}}</p>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" :src="news.links[0].href" data-holder-rendered="true">
          </div>
</template>