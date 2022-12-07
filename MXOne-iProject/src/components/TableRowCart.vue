<script>
export default {
  name: "TableRowCart",
  props: ["cart"],
  methods: {},
};
</script>

<script setup>
function formatRupiah(money) {
  return new Intl.NumberFormat(
    "id-ID",
    { style: "currency", currency: "IDR", minimumFractionDigits: 0 } // diletakkan dalam object
  ).format(money);
}
</script>

<template>
  <tr class="bg-gray-800">
    <td class="p-3">
      <div class="flex align-items-center">
        <img
          class="h-32"
          :src="'https://image.tmdb.org/t/p/h632' + cart.Movie.poster_path"
          alt="unsplash image"
        />
        <div class="ml-3">
          <div class="">{{ cart.Movie.title }}</div>
          <div class="text-gray-500">ID: {{ cart.Movie.id_tmdb }}</div>
        </div>
      </div>
    </td>
    <td class="p-3 font-bold">{{ formatRupiah(cart.Movie.price) }}</td>
    <td class="p-3">
      <span class="bg-green-400 text-gray-50 rounded-md px-2">available</span>
    </td>
    <td class="p-3">
      <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
        <i class="material-icons-outlined text-base">visibility</i>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-100 mx-2">
        <i class="material-icons-outlined text-base">edit</i>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-100 ml-2">
        <i class="material-icons-round text-base">delete_outline</i>
      </a>
    </td>
  </tr>
</template>
