<template>
  <main class="contenido-principal contenedor">
    <h2 class="text-center">Nuestro Blog</h2>

    <section class="contenedor-blog">
      <div class="blog">
        <article class="entrada">
          <h2>Guía de Colores</h2>
          <div class="imagen">
            <img src="../assets/img/nosotros.jpg" alt="imagen nosotros" />
          </div>
          <div class="entrada-meta">
            <p>Fecha: <span>22 Octubre 2022</span></p>
            <p>Escrito por: <span>TiendaMuebles</span></p>
          </div>
          <div class="entrada-blog">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias maxime ducimus similique corporis exercitationem, illo
              repudiandae. Nostrum quo rem voluptatum quam, incidunt repellat
              magni architecto omnis soluta, facere eum ullam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              fugit quas tempora vero doloribus incidunt, rem quo ipsam amet,
              velit officia adipisci non nemo similique itaque. Deleniti nostrum
              cum odit?
            </p>
          </div>
          <router-link to="/entrada" class="btn max-width">Leer</router-link>
        </article>

        <article class="entrada">
          <h2>Guía de Colores</h2>
          <div class="imagen">
            <img src="../assets/img/nosotros.jpg" alt="imagen nosotros" />
          </div>
          <div class="entrada-meta">
            <p>Fecha: <span>22 Octubre 2022</span></p>
            <p>Escrito por: <span>TiendaMuebles</span></p>
          </div>
          <div class="entrada-blog">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias maxime ducimus similique corporis exercitationem, illo
              repudiandae. Nostrum quo rem voluptatum quam, incidunt repellat
              magni architecto omnis soluta, facere eum ullam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              fugit quas tempora vero doloribus incidunt, rem quo ipsam amet,
              velit officia adipisci non nemo similique itaque. Deleniti nostrum
              cum odit?
            </p>
          </div>
          <router-link to="/entrada" class="btn max-width">Leer</router-link>
        </article>
      </div>
      <aside>
        <h3>Otras entradas del Blog</h3>
        <ul>
          <li><a href="entrada.html">Guía de Colores</a></li>
          <li><a href="entrada.html">Nuevos Modelos</a></li>
          <li><a href="entrada.html">Guía de Interioress</a></li>
          <li><a href="entrada.html">Guía de Exterioores</a></li>
        </ul>
      </aside>
    </section>
  </main>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style>
</style>