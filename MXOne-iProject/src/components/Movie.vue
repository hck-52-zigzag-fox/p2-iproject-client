<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "MovieCard",
  props: ["movie"],
  methods: {
    ...mapActions(useCounterStore, ["movieDetail"]),
  },
  created() {
    // console.log(movie.genre_ids);
    // this.movieDetail(this.$route.id);
  },
};
</script>

<template>
  <div class="card">
    <!-- <p>{{ movie.id }}</p> -->
    <a href="#" @click.prevent="movieDetail(movie.id)">
      <div class="img1">
        <img
          :src="'https://image.tmdb.org/t/p/h632' + movie.poster_path"
          alt=""
        />
      </div>
      <div class="img2">
        <!-- <img
          :src="'https://image.tmdb.org/t/p/h632' + movie.backdrop_path"
          alt=""
        /> -->
      </div>
      <div class="title">{{ movie.original_title }}</div>
      <div class="text">
        Now You can watch the first epsoide of the action series Vikings , wish
        you interesting watch
      </div>
      <a href="#"
        ><div class="catagory">Series <i class="fas fa-film"></i></div
      ></a>
      <a href="#"
        ><div class="views">20211 <i class="far fa-eye"></i></div
      ></a>
    </a>
  </div>
</template>

<style>
.box {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr) 1.5fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 11px;
}
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

a {
  text-decoration: none;
  color: #000;
}

.card {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 400px;
  margin: 50px auto;
  background: #212f3c;
  border: 5px solid #1a163f;
  border-radius: 3px;
  box-shadow: 0 0 10px #2a264f;
}

.card .img1 {
  position: absolute;
  top: 0;
  left: 0;
  height: 60%;
  width: 100%;
  background-image: url(http://cima4u.tv/wp-content/uploads/1-71.jpg);
  background-size: 310px 440px;
  background-position: left top;
  transition: all 0.5s ease-in-out;
}

.card .img2 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40%;
  width: 100%;
  background-image: url(http://cima4u.tv/wp-content/uploads/1-71.jpg);
  background-size: 310px 440px;
  background-position: left bottom;
  transition: all 0.5s ease-in-out;
}

.card .title {
  height: 22%;
  width: 100%;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #fffc;
  padding: 15px 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 -95px 28px -25px #000 inset;
}

.card .text {
  position: absolute;
  bottom: 80px;
  height: 120px;
  padding: 15px 10px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  transform: rotate(90deg);
  transform-origin: 0 100px;
  opacity: 0;
  transition: all 0.5s ease;
}

.card .catagory {
  position: absolute;
  left: 10px;
  top: 30px;
  padding: 3px 10px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background: #2a264f;
  color: #fff;
  border-radius: 5px;
  transform: translate(-160px, 0);
  transition: all 0.5s ease;
}

.card .views {
  position: absolute;
  left: 10px;
  top: 70px;
  padding: 3px 10px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background: #8b2463;
  color: #fff;
  border-radius: 5px;
  transform: translate(-160px, 0);
  transition: all 0.5s ease 0.15s;
}

.card:hover .img1 {
  transform: rotate(10deg) scale(1.3) translate(20px, 0);
  transform-origin: 300px 300px;
  opacity: 0.5;
}

.card:hover .img2 {
  transform: rotate(90deg) translate(0px, 150px);
  transform-origin: -20px 200px;
}

.card:hover .text {
  opacity: 0.8;
  transform: rotate(0deg);
}

.card:hover .views,
.card:hover .catagory {
  transform: translate(0);
}
</style>
