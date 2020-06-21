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
      <router-link
        :to="`/font/${encodedFontFamily}/`"
        class="preview"
        :style="fontFamily"
      >
        {{ previewText }}
      </router-link>
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
  margin: 1rem 0;
  display: flex;
  flex-flow: column;
  background: var(--green-lighter);
  border-radius: 10px;
  border-bottom: 5px solid var(--green);
  overflow: hidden;
}

.head {
  border-bottom: 1px solid var(--green-light);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body {
  padding: 1rem;
  background: var(--green-lighter);
}

.preview {
  font-family: var(--font-name);
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--green-dark);
  text-decoration: none;
}

.title {
  text-transform: uppercase;
  color: var(--green);
  font-weight: bold;
  text-decoration: none;
}
</style>
