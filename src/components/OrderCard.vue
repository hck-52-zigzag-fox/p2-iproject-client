<script>
export default {
  name: "OrderCard",
  props: ['order'],
  
};
</script>

<template>
  <div class="Cart-Items">
    <div class="image-box">
      <img class="w3-grayscale" src="https://i.pinimg.com/564x/a1/25/90/a12590985e7dec6c1f18355c70564862.jpg" style="height: 120px; border-radius: 10px;" />
    </div>
    <div class="about">
      <h1 class="title">Bust up</h1>
      <h3 class="subtitle">250ml</h3>
    </div>
    <div class="status">Unpaid</div>
    <div class="prices">
      <div class="amount">$2.99</div>
      <div class="save"><u>Detail</u></div>
      <div class="remove"><u>Remove</u></div>
    </div>
    <div>
      <i class="bi bi-chat-dots-fill fs-4"></i>
    </div>
  </div>
</template>

<style>
.Cart-Items {
  margin: auto;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.image-box {
  width: 15%;
  text-align: center;
}
.about {
  height: 100%;
}
.title {
  padding-top: 5px;
  line-height: 10px;
  font-size: 32px;
  font-weight: 800;
  color: #202020;
}
.subtitle {
  margin-top: 20px;
  line-height: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #909090;
}
.prices {
  height: 100%;
  text-align: right;
}
.amount {
  padding-top: 20px;
  font-size: 26px;
  font-weight: 800;
  color: #202020;
}
.save {
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #1687d9;
  cursor: pointer;
}
.remove {
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
}
</style>
