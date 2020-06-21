<template>
  <div>{{ fontFamily }}</div>
</template>

<script>
export default {
  name: "Font",
  props: {
    fontFamily: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
