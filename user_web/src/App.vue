<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <div id="app">
    <div class="row">
      <div class="col-2"><AppHeader /></div>
      <div class="col-10"><router-view /></div>
    </div>
  </div>
</template>

