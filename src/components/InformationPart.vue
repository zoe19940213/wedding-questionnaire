<template>
  <div class="information">
    <img src="https://imgpile.com/images/TGzar2.png" alt="" />
    <div class="description">
      <p class="mb-3">日期：2023/1/14(六)</p>
      <p class="mb-3">地點：台北萬豪酒店 8F Garden Villa</p>
      <p class="mb-3">證婚儀式：16:30進場 | 17:00開始</p>
      <p>婚宴：17:30迎賓 | 18:30開始</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationPart"
};
</script>

<style lang="sass" scoped>
.information
  display: flex
  justify-content: space-around
  align-items: center
  img
    width: 150px
  .description
    p
      font-family: 'Noto Serif TC', serif
      &::before
       content:''
       display: inline-block
       margin-right: 10px
       width: 8px
       height: 8px
       border-radius: 50%
       background: $coral-pink
</style>
