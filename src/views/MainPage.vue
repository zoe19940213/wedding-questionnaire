<template>
  <main class="container">
    <h1 class="title p-4">育柔 & 志辰婚禮出席</h1>
    <PhotoCarousel />
    <InformationPart />
    <MainForm />
  </main>
</template>

<script>
import PhotoCarousel from "../components/PhotoCarousel";
import InformationPart from "../components/InformationPart";
import MainForm from "../components/MainForm";

export default {
  name: "MainPage",
  components: {
    PhotoCarousel,
    InformationPart,
    MainForm
  }
};
</script>

<style lang="sass" scoped>
.container
  margin: auto
  width: 100%
  background: $baby-gray
  .title
    margin: 2rem
    text-align: center
    border-bottom: 1px solid $baby-blue

@media screen and (min-width: 576px)
  .container
    margin-top: 2rem
    width: 80%
    border-radius: 5px
    box-shadow: 0px 0px 5px 3px rgba(143,141,143,1)

@media screen and (min-width: 768px)
  .container
    margin-top: 2.5rem
    max-width: 1000px
</style>
