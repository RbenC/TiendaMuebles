<template>
  <!-- <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Nosotros</router-link> |
    <router-link to="/tienda">Tienda</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/galeria">Balería</router-link> |
    <router-link to="/contacto">Contacto</router-link>
  </div> -->
  <div class="contenedor-navegacion">
    <nav class="nav-principal contenedor">
      <div class="categoria">
        <router-link to="/">Inicio</router-link>
      </div>
      <div class="categoria">
        <router-link to="/nosotros">Nosotros</router-link>
      </div>
      <div class="categoria">
        <router-link to="/productos" class="categoria">Tienda</router-link>
      </div>
      <div class="categoria">
        <router-link to="/blog">Blog</router-link>
      </div>
      <div class="categoria">
        <router-link to="/galeria">Galería</router-link>
      </div>
      <div class="categoria">
        <router-link to="/contacto">Contacto</router-link>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>