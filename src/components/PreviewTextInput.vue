<template>
  <div>
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

<style scoped></style>
