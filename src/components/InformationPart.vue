<template>
  <div class="information my-4">
    <img :src="casesImage" alt="" />
    <div class="description">
      <p class="mb-3">日期：{{ info.date }}</p>
      <p class="mb-3">地點：{{ info.place }}</p>
      <p class="mb-3">證婚儀式：{{ info.ceremony }}</p>
      <p>婚宴：17:30迎賓 | 18:30開始</p>
    </div>
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
  display: flex
  justify-content: space-around
  align-items: center
  img
    width: 100px
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
