<template>
  <header>
    <div class="container">
      <router-link to="/">
        <span class="definitely">Definitely not </span>
        <span class="google">Google Fonts</span>
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
  border-bottom: 1px solid var(--black);
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
.definitely {
  font-size: 1.2rem;
}
.google {
  color: var(--white);
}
</style>
