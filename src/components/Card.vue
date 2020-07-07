<template>
  <div class="card">
    <div class="head" v-if="$slots.head">
      <slot name="head" />
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.card {
  margin: 1rem 0;
  display: flex;
  flex-flow: column;
  background: var(--white);
  border-radius: 10px;
  border-bottom: 4px solid var(--green-light);
  overflow: hidden;
}

.head {
  border-bottom: 1px solid var(--green-lighter);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body {
  padding: 1rem;
}
</style>
