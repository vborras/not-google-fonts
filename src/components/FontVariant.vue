<template>
  <p>{{ variant }}</p>
</template>

<script>
export default {
  name: "FontVariant",
  props: {
    variant: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
