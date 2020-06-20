<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  components: { TheHeader }
};
</script>

<style>
#app {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
