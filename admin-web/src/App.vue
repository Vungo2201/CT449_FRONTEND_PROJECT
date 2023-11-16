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
      <div class="col-3"><AppHeader /></div>
      <div class="col-9"><router-view /></div>
    </div>
  </div>
</template>

