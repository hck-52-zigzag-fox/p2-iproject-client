<script>
export default {
  name: "RecomendationCard",
};
</script>
<template>
  <div class="py-20 mb-20 font-mono">
    <h1 class="text-3xl font-bold">Recomendation</h1>
  </div>
  <div class="flex place-items-stretch grid grid-cols-4 gap-4 px-96 gap-1">
    <img
      src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
      alt="pic"
      class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
    />
    <img
      src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
      alt="pic"
      class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
    />
    <img
      src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
      alt="pic"
      class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
    />
    <img
      src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
      alt="pic"
      class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
    />
    <img
      src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
      alt="pic"
      class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
    />
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap");

body {
  text-align: center;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
}
.hr-text:before {
  content: "";
  background: linear-gradient(to right, transparent, #818078, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #818078;
  background-color: #fcfcfa;
}
</style>
