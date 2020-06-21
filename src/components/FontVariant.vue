<template>
  <div class="variant">
    <h3>{{ variantLabel }}</h3>
    <p class="preview" :style="previewStyles">
      {{ previewText }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FontVariant",
  props: {
    variant: {
      type: String,
      required: true
    },
    fontFamily: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(["previewText"]),
    variantLabel() {
      if (this.isItalic) {
        return `${this.fontWeight} italic`;
      }
      return `${this.fontWeight}`;
    },
    isItalic() {
      return this.variant.includes("italic");
    },
    fontWeight() {
      return this.variant.match(/\d+/g) || "400";
    },
    previewStyles() {
      return {
        "font-family": this.fontFamily,
        "font-weight": this.fontWeight,
        "font-style": this.fontStyle
      };
    },
    fontStyle() {
      return this.isItalic ? "italic" : "normal";
    }
  }
};
</script>

<style scoped>
.preview {
  font-size: 2rem;
}
</style>
