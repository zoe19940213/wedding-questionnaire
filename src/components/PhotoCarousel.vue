<template>
  <div id="photo-carousel">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <img
          :src="weddingImage.slide1"
          alt="wedding-image-1"
          class="wedding-image"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          :src="weddingImage.slide2"
          alt="wedding-image-2"
          class="wedding-image"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          :src="weddingImage.slide3"
          alt="wedding-image-3"
          class="wedding-image"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          :src="weddingImage.slide4"
          alt="wedding-image-4"
          class="wedding-image"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reactive } from "@vue/reactivity";

export default {
  name: "PhotoCarousel",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const weddingImage = reactive({
      slide1: require("../assets/images/wedding-dress-1.jpg"),
      slide2: require("../assets/images/wedding-dress-2.jpg"),
      slide3: require("../assets/images/wedding-dress-3.jpg"),
      slide4: require("../assets/images/wedding-dress-4.jpg")
    });
    return {
      weddingImage,
      modules: [Navigation, Pagination]
    };
  }
};
</script>

<style lang="sass" scoped>
.wedding-image
  width: 100%
  height: auto
::v-deep
  & .swiper-button-next, & .swiper-button-prev
    color: $baby-blue
    &::after
      font-size: 1.5rem
  & .swiper-pagination-bullet
    width: 0.5rem
    height: 0.5rem
  & .swiper-pagination-bullet-active
    background: $baby-blue
  & .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet
    margin-right: 0.2rem
</style>
