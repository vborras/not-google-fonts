<template>
  <div class="overlay">
    <div class="spinner">
      <FontAwesomeIcon icon="spinner" class="fa-spin"></FontAwesomeIcon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: #ffffff66;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  height: 150px;
  width: 150px;
  font-size: 4rem;
}
</style>
