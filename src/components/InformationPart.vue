<template>
  <div class="information m-4 p-4">
    <div class="description">
      <p class="mb-4 pl-6">日期：{{ info.date }}</p>
      <p class="mb-4 pl-6">地點：{{ info.place }}</p>
      <p class="mb-4 pl-6">證婚儀式：{{ info.ceremony }}</p>
      <p class="pl-6">婚宴：17:30迎賓 | 18:30開始</p>
    </div>
    <img :src="casesImage" alt="" />
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "InformationPart",
  setup() {
    const casesImage = require("../assets/images/cases.png");
    const info = reactive({
      date: "2023/1/14 (六)",
      place: "台北萬豪酒店 8F Garden Villa",
      ceremony: "16:30進場 | 17:00開始",
      banquet: "17:30迎賓 | 18:30開始"
    });

    return { casesImage, info };
  }
};
</script>

<style lang="sass" scoped>
.information
  position: relative
  display: flex
  align-items: center
  border: 1px solid $baby-blue
  border-radius: 5px
  img
    position: absolute
    right: 10px
    bottom: 10px
    width: 20%
    max-width: 150px
  .description
    p
      position: relative
      font-family: 'Noto Serif TC', serif
      &::before
       content: ''
       display: block
       position: absolute
       top: -4px
       left: 0
       width: 20px
       height: 20px
       background-image: url('../assets/images/hot-balloon-blue-yellow.png')
       background-size: cover
       transform: rotate(-20deg)
</style>
