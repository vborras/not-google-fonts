<template>
  <Card>
    <template #head>
      <router-link :to="`/font/${encodedFontFamily}/`" class="title">{{
        font.family
      }}</router-link>
      <div>
        <FontAwesomeIcon
          icon="bold"
          class="icon-variant"
          v-if="hasBoldVariants"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon="italic"
          class="icon-variant"
          v-if="hasItalicVariants"
        ></FontAwesomeIcon>
        <span class="category" :class="`category--${font.category}`">{{
          font.category
        }}</span>
      </div>
    </template>
    <template #default>
      <router-link
        :to="`/font/${encodedFontFamily}/`"
        class="preview"
        :style="fontFamily"
      >
        {{ previewText }}
      </router-link>
    </template>
  </Card>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card";

export default {
  name: "FontCard",
  components: { Card },
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
    },
    hasBoldVariants() {
      const boldVariant = this.font.variants.find(variant => {
        const weight = variant.match(/\d+/g);
        return weight && weight > 400;
      });
      return boldVariant !== undefined;
    },
    hasItalicVariants() {
      const italicVariant = this.font.variants.find(variant =>
        variant.includes("italic")
      );
      return italicVariant !== undefined;
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
.preview {
  font-family: var(--font-name);
  font-size: 1.5rem;
  color: var(--green-dark);
  text-decoration: none;
}

.title {
  text-transform: uppercase;
  color: var(--green);
  font-weight: bold;
  text-decoration: none;
}

a.title:hover {
  text-decoration: underline;
}

.category {
  line-height: 1rem;
  color: var(--green);
}

.category--sans-serif {
  font-family: sans-serif;
}
.category--serif {
  font-family: serif;
}
.category--monospace {
  font-family: monospace;
}
.category--handwriting {
  font-family: cursive;
}
.category--display {
  font-family: fantasy;
}

.icon-variant {
  font-size: 0.8rem;
  line-height: 1rem;
  margin-right: 1rem;
  color: var(--green);
}
</style>
