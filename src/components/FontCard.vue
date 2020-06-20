<template>
  <div class="card">
    <div class="head">
      <div class="title">{{ font.family }}</div>
      <div>
        <span>{{ font.category }}</span>
      </div>
    </div>
    <div class="body">
      <p class="preview" :style="fontFamily">
        The wizard quickly jinxed the gnomes before they vaporized.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FontCard",
  props: {
    font: {
      type: Object,
      required: true
    }
  },
  computed: {
    fontFamily() {
      return `--font-name: ${this.font.family}`;
    }
  },
  mounted() {
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${this.font.family.replace(
      / /g,
      "+"
    )}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
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
