<script>
export default {
  name: "Banner"
}
</script>

<template>
  <!-- ***** Main Banner Area Start ***** -->
  <div class="main-banner" id="top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="left-content">
            <div class="thumb">
              <div class="inner-content">
                <h4>We Are Hexashop</h4>
                <div class="main-border-button">
                  <RouterLink to="/products" class="logo">
                    Purchase Now!
                  </RouterLink>
                </div>
              </div>
              <img src="../assets/images/left-banner-image.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="right-content">
            <div class="row">
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Women</h4>
                      <span>Best Clothes For Women</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <div class="main-border-button">
                          <RouterLink to="/products" class="logo">
                            Purchase Now!
                          </RouterLink>
                        </div>
                      </div>
                    </div>
                    <img src="../assets/images/baner-right-image-01.jpg">
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Men</h4>
                      <span>Best Clothes For Men</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <div class="main-border-button">
                          <RouterLink to="/products" class="logo">
                            Purchase Now!
                          </RouterLink>
                        </div>
                      </div>
                    </div>
                    <img src="../assets/images/baner-right-image-02.jpg">
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Kids</h4>
                      <span>Best Clothes For Kids</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <div class="main-border-button">
                          <RouterLink to="/products" class="logo">
                            Purchase Now!
                          </RouterLink>
                        </div>
                      </div>
                    </div>
                    <img src="../assets/images/baner-right-image-03.jpg">
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Accessories</h4>
                      <span>Best Trend Accessories</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <div class="main-border-button">
                          <RouterLink to="/products" class="logo">
                            Purchase Now!
                          </RouterLink>
                        </div>
                      </div>
                    </div>
                    <img src="../assets/images/baner-right-image-04.jpg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->
</template>