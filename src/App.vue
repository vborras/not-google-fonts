<template>
  <div id="app">
    <TheHeader />
    <main>
      <div class="container">
        <router-view />
      </div>
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
  display: flex;
  flex-flow: column;
}
main {
  flex: 1 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
