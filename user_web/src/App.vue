<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<template>
  <div id="app">
      <div class=""><AppHeader /></div>
      <div class=""><router-view /></div>
      <div class=""><AppFooter /></div>
  </div>
</template>

