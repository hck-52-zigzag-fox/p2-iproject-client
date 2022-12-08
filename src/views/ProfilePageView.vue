<script>
import { mapActions, mapState } from 'pinia';
import { usePublicStore } from '../stores/public';
import PlaceholderList from '../components/PlaceholderListHomeView.vue';
import LikedCard from '../components/LikedCardView.vue';

export default {
  name: 'ProfilePage',
  components: {
    PlaceholderList,
    LikedCard
  },
  computed: {
    ...mapState(usePublicStore, ['liked', 'liked_status', 'user'])
  },
  methods: {
    ...mapActions(usePublicStore, ['getLike', 'getUser', 'paymentmt'])
  },
  created() {
    this.getLike()
    this.getUser()
  }
}
</script>

<template>
  <div class="flex justify-center mt-6 mb-16">
    <div class="flex-col w-5/6">
      <div class="flex flex-row">
        <div class="basis-1/4" >
          <div class="m-4 p-3 flex flex-col justify-left bg-slate-600" style="height: 51vh;">
            <p class="text-3xl capitalize font-semibold border-b-4 border-slate-700">profile</p>
            <p class="text-xl capitalize">Username:</p>
            <p class="text-xl">{{user.username}}</p>
            <p class="text-xl capitalize">Email:</p>
            <p class="text-xl">{{user.email}}</p>
            <p class="text-xl capitalize">Status:</p>
            <p class="text-xl">{{user.status}}</p>
            <div v-if="user.status == 'Free'">
              <button  @click="paymentmt" type="button" class="focus:outline-none mt-8 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Go Premium</button>
            </div>
            <p v-else class="text-5xl text-yellow-700 capitalize">premium</p>
          </div>
        </div>
        <div class="basis-3/4">
          <div class="p-4">
            <div class="relative">
              <img
                src="https://t3.ftcdn.net/jpg/03/08/13/12/360_F_308131267_unLRF2JmPsjjXgrMRaFA3aEnrKa9aUxK.jpg"
                style="width: 100%; height: 51vh"
              />
              <h1
                class="absolute text-8xl text-gray-800 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                Anim8
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-6 mb-16">
    <div class="flex-col w-5/6">
      <div class="flex flex-row">
        <!-- anime list sini -->
        <div class="bg-blue-900 p-3 rounded mb-3">
          <h2 class="font-semibold text-slate-200 text-6xl mb-4">Liked Anime</h2>
        </div>
      </div>
      <div v-if="(liked_status)" class="flex flex-row">
        <!-- anime list sini -->
        <section
          class="hide-scroll-bar flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 px-5"
        >
          <LikedCard v-for="anime in liked" :anime="anime" />
        </section>
      </div>
      <!-- <p>{{liked}}</p> -->
      <PlaceholderList v-if="!liked_status" />
      <PlaceholderList v-if="(liked.length == 0)" />
    </div>
  </div>
</template>