<template>
  <div class="wrapper">
    <p>Enter the text for the preview</p>
    <input type="text" v-model="previewText" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PreviewTextInput",
  computed: {
    previewText: {
      get() {
        return this.$store.state.previewText;
      },
      set(value) {
        this.setPreviewText(value);
      }
    }
  },
  methods: {
    ...mapMutations(["setPreviewText"])
  }
};
</script>

<style scoped>
.wrapper {
  padding: 2rem 0 2rem;
}
p {
  margin-bottom: 0.5rem;
  color: var(--green);
  font-size: small;
  text-transform: uppercase;
}

input {
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  background: white;
  border: 1px solid var(--green-light);
}
</style>
