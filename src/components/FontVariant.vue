<template>
  <div class="variant">
    <h4>{{ variantLabel }}</h4>
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
.variant {
  padding: 1rem 0;
}
.variant:not(:last-child) {
  border-bottom: 1px solid var(--green-light);
}

h4 {
  color: var(--green);
}

.preview {
  font-size: 2rem;
}
</style>
