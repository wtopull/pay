<template>
  <div id="app">
    <headers></headers>
    <section>
      <router-view/>
    </section>
    <footers></footers>
  </div>
</template>

<script>
import headers from "@/components/headers.vue";
import footers from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    headers,
    footers
  }
};
</script>

<style lang='scss'>
@import "@/assets/scss/public.scss";
@import "@/assets/scss/reset.scss";
</style>
