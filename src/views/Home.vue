<template>
  <Hero />
  <Categorias />
  <Nosotros />
  <Productos />
  <Footer />
</template>

<script>
import Categorias from "../components/Categorias.vue";
import Hero from "../components/Hero.vue";
import Nosotros from "../views/Nosotros.vue";
import Productos from "../views/Productos.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Categorias,
    Nosotros,
    Productos,
    Footer,
  },
};
</script>
    
