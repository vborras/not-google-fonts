<template>
  <header>
    <div class="container">
      Definitely not Google Fonts
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
header {
  --header-height: 60px;
  height: var(--header-height);
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--grey-light);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
