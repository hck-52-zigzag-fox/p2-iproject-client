<script>
import { usePetStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
import ProductCardPage from './ProductCardPage.vue';
export default{
    name: "ProductPage",
    computed:{
        ...mapState(usePetStore, ['product'])
    },
    methods: {
        ...mapActions(usePetStore, ["fetchProduct"])
    },
    created() {
        this.fetchProduct();
    },
    components: { ProductCardPage }
}
</script>

<template>
       <div class="container py-5">
  <!-- First Row [Products]-->
  <h2 class="font-weight-bold mb-2">Our Product</h2>
  <p class="font-italic text-muted mb-4">Make your pets happy.</p>

  <div class="row pb-5 mb-4">
    
      <!-- Card-->
    <ProductCardPage v-for="el in product" :key="el.id" :el="el"/>
<!-- 
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      Card
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" class="img-fluid d-block mx-auto mb-3">
          <h5> <a href="#" class="text-dark">Awesome product</a></h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div> -->

    <!-- <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      Card
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-3_rk25rt.jpg" alt="" class="img-fluid d-block mx-auto mb-3">
          <h5> <a href="#" class="text-dark">Awesome product</a></h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      Card
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-4_vgfjy9.jpg" alt="" class="img-fluid d-block mx-auto mb-3">
          <h5> <a href="#" class="text-dark">Awesome product</a></h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div> -->
    
  </div>
  <!-- Second Row [Team]-->
  <h2 class="font-weight-bold mb-2">Our Team</h2>
  <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

  <div class="row pb-5 mb-4">
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card-->
      <div class="card shadow-sm border-0 rounded">
        <div class="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg" alt="" class="w-100 card-img-top">
          <div class="p-4">
            <h5 class="mb-0">Mark Rockwell</h5>
            <p class="small text-muted">CEO - Consultant</p>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card-->
      <div class="card shadow-sm border-0 rounded">
        <div class="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg" alt="" class="w-100 card-img-top">
          <div class="p-4">
            <h5 class="mb-0">Mark Rockwell</h5>
            <p class="small text-muted">CEO - Consultant</p>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card-->
      <div class="card shadow-sm border-0 rounded">
        <div class="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg" alt="" class="w-100 card-img-top">
          <div class="p-4">
            <h5 class="mb-0">Mark Rockwell</h5>
            <p class="small text-muted">CEO - Consultant</p>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card-->
      <div class="card shadow-sm border-0 rounded">
        <div class="card-body p-0"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg" alt="" class="w-100 card-img-top">
          <div class="p-4">
            <h5 class="mb-0">Mark Rockwell</h5>
            <p class="small text-muted">CEO - Consultant</p>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>