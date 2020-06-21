<template>
  <div class="card">
    <div class="head">
      <router-link :to="`/font/${encodedFontFamily}/`" class="title">{{
        font.family
      }}</router-link>
      <div>
        <span>{{ font.category }}</span>
      </div>
    </div>
    <div class="body">
      <p class="preview" :style="fontFamily">
        {{ previewText }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FontCard",
  props: {
    font: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      linkTag: null
    };
  },
  computed: {
    ...mapState(["previewText"]),
    fontFamily() {
      return `--font-name: ${this.font.family}`;
    },
    encodedFontFamily() {
      return this.font.family.replace(" ", "+");
    }
  },
  mounted() {
    this.linkTag = document.createElement("link");
    this.linkTag.href = `https://fonts.googleapis.com/css2?family=${this.encodedFontFamily}&display=swap`;
    this.linkTag.rel = "stylesheet";
    document.head.appendChild(this.linkTag);
  },
  destroyed() {
    this.linkTag.parentNode.removeChild(this.linkTag);
  }
};
</script>

<style scoped>
.card {
  border: 1px solid var(--grey-light);
  margin: 1rem 0;
  display: flex;
  flex-flow: column;
}

.head {
  border-bottom: 1px solid var(--grey-light);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body {
  padding: 1rem;
}

.preview {
  font-family: var(--font-name);
  font-size: 32px;
}

.title {
  text-transform: uppercase;
}
</style>
