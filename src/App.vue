<template>
  <div id="app">
    <TheHeader />
    <main>
      <div class="container">
        <PreviewTextInput />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import PreviewTextInput from "@/components/PreviewTextInput";
export default {
  components: { PreviewTextInput, TheHeader }
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
