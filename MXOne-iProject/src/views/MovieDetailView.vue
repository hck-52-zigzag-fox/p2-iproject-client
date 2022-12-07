<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "MovieDetailView",
  computed: {
    ...mapState(useCounterStore, ["movie"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["movieDetail"]),
  },
  created() {
    this.movieDetail(this.$route.params.id);
    // console.log(this.movie.videos.results[0].key);
    console.log(this.movie);
  },
};
</script>

<template>
  <!-- <h1>Halaman {{ this.$route.params.id }}</h1> -->
  <section
    class="hero"
    :style="`background-image: radial-gradient(circle, rgba(0,0,0,0.5) 0%, #000 100%) ,url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}); min-height: 650px;`"
  >
    <div class="hero__info container">
      <!-- POSTER  -->

      <div class="hero__poster">
        <a
          :href="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
          :alt="movie.title"
          :title="movie.title"
          target="_blank"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`"
            :alt="movie.title"
            :title="movie.title"
            class="hero__image"
          />
        </a>
        <div>
          <span
            v-if="movie.vote_average"
            class="hero__rating"
            alt="Rating"
            title="Rating"
          >
            {{ movie.vote_average }} / 10
          </span>
          <span class="hero__runtime" alt="Rating" title="Duration">
            <b>⏱</b>
            {{ movie.runtime }} min
          </span>
        </div>

        <div class="hero__genres">
          <a
            href="#"
            class="hero__genre"
            :alt="genre.name"
            :title="genre.name"
            v-for="genre in movie.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </a>
        </div>
      </div>

      <!-- HERO DETAILS -->

      <div class="hero__details">
        <h1 class="hero__title">{{ movie.title }}</h1>
        <h4 v-if="movie.tagline" class="hero__tagline">
          "{{ movie.tagline }}"
        </h4>
        <p class="hero__overview">{{ movie.overview }}</p>
      </div>
    </div>
  </section>

  <div class="youtube-iframe">
    <div class="w-full">
      <iframe
        class="w-full"
        height="400"
        :src="`https://www.youtube.com/embed/${movie.videos.results[0].key}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
}
section {
  padding: 2rem;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-repeat: no-repeat;
  background-position: center 20%;
  background-size: cover;
  &__poster {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include mq(tablet) {
      width: 200px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    @include mq(tablet) {
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      justify-content: center;
    }
  }
  &__image {
    width: 200px;
    height: auto;
    margin: 1rem;
    box-shadow: 0 0 30px 1px #000;
    transition: all 50ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__details {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
  }
  &__title {
    margin: 0;
    font-size: 2rem;
    text-shadow: #fff 0 0 5px;
    @include mq(tablet) {
      font-size: 3rem;
    }
  }
  &__tagline {
    margin: 0;
    font-weight: 100;
    font-style: italic;
  }
  &__genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: stretch;
    justify-content: center;
    margin: 1rem 0;
  }
  &__genre {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background: $lightbg;
    &:hover {
      background: $green;
    }
    @include mq(tablet) {
      flex: 1;
    }
  }
  &__overview {
    max-width: 60ch;
    font-size: 16px;
    line-height: 26px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    @include mq(tablet) {
      font-size: 18px;
      line-height: 30px;
    }
  }
  &__socials {
    display: flex;
    gap: 0.5rem;
  }
  &__social-icon {
    height: 2rem;
  }
}
.wallpapers {
  &__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    @include mq(tablet) {
      flex: 1;
    }
    & a {
      display: flex;
      flex-direction: column;
    }
  }
  &__image {
    width: 200px;
    height: auto;
    margin: 1rem;
    box-shadow: 0 0 30px 1px #000;
    transition: all 50ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__size {
    margin: 0;
    font-size: 0.8rem;
    text-shadow: #fff 0 0 5px;
  }
}
.cast {
  &__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem 0;
    justify-content: space-between;
  }
  &__image {
    width: 92px;
    height: 92px;
    object-fit: cover;
    object-position: center 20%;
    border-radius: 50%;
  }
  &__item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    padding: 0.5rem;
    border-radius: 100px;
  }
  &__item:hover {
    background: $green;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__name {
    font-weight: bold;
  }
  &__role {
    color: $gray;
  }
}
.similar {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem;
    padding: 1rem 0;
  }
  &__item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 130px;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
    text-align: center;
    border-radius: 18px;
    &:hover {
      background: $green;
    }
  }
  &__image {
    width: 92px;
    height: 138px;
    border-radius: 10px;
    margin: 0.5rem;
  }
}
</style>
