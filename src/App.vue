<template>
  <main>
    <div class="wrapper"></div>
    <MainPage />
  </main>
</template>
<script>
import MainPage from "./views/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage
  }
};
</script>

<style lang="sass">
.wrapper
  position: fixed
  z-index: -2
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-image: url('./assets/images/background.jpg')
  background-size: cover
  opacity: 0.5
</style>
