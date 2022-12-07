<script>
import YouTube from "vue3-youtube";

export default {
  name: "Home",
  components: { YouTube },
};
</script>

<template>
  <section>
    <div class="position-absolute top-50 start-50 translate-middle">
      <div style="padding-left: 10vh">
        <YouTube
          src="https://www.youtube.com/embed/eqs8wOiBLhc"
          @ready="onReady"
          ref="youtube"
        />
      </div>
      <p style="color: white; font-size: 20px; text-align: center">
        Bola basket adalah olahraga bola berkelompok yang terdiri atas dua tim
        beranggotakan masing-masing lima orang yang saling bertanding mencetak
        poin dengan memasukkan bola ke dalam keranjang lawan. Bola basket dapat
        di lapangan terbuka, walaupun pertandingan profesional pada umumnya
        dilakukan di ruang tertutup. Lapangan pertandingan yang diperlukan juga
        relatif tidak besar, misal dibandingkan dengan sepak bola. Selain itu,
        permainan bola basket juga lebih kompetitif karena tempo permainan
        cenderung lebih cepat jika dibandingkan dengan olahraga bola yang lain,
        seperti voli dan sepak bola
      </p>
    </div>
  </section>
</template>
