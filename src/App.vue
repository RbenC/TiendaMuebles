<template>
  <NombreSitio />
  <NavBar />
</template>

<script>
import "./css/normalize.css";
import "./css/app.css";
import NavBar from "./components/NavBar.vue";
import NombreSitio from "./components/NombreSitio.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NombreSitio,
  },
};
</script>


<style lang="scss">
</style>
