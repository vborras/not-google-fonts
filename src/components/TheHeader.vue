<template>
  <header>
    <div class="container">
      <router-link to="/">
        Definitely not <strong>Google</strong> Fonts
      </router-link>
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
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--black);
  background: var(--green-dark);
  font-size: 1.5rem;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
  color: var(--green-light);
}
</style>
