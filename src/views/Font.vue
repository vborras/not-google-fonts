<template>
  <div>
    <Loader v-if="isLoading || !font" />
    <Card v-else>
      <div class="title">
        <h1>{{ font.family }}</h1>
        <router-link to="/" class="button--back">Back</router-link>
      </div>
      <h3>Styles</h3>
      <FontVariant
        v-for="variant in font.variants"
        :key="variant"
        :variant="variant"
        :font-family="font.family"
      ></FontVariant>
    </Card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loader from "@/components/Loader";
import FontVariant from "@/components/FontVariant";
import Card from "@/components/Card";

export default {
  name: "Font",
  components: { Loader, FontVariant, Card },
  props: {
    fontFamily: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapState(["font"]),
    decodedFontFamily() {
      return this.fontFamily.replace("+", " ");
    },
    fontURL() {
      return `https://fonts.googleapis.com/css2?family=${this.fontFamily}${this.variantsString}&display=swap`;
    },
    variantsString() {
      if (this.isOnlyRegular) {
        return "";
      }
      if (this.isOnlyRegularAndItalic) {
        return ":ital@0;1";
      }
      if (this.hasItalicVariant) {
        return this.italicVariantsString;
      }
      return this.regularVariantsString;
    },
    isOnlyRegular() {
      return JSON.stringify(this.font.variants) === JSON.stringify(["regular"]);
    },
    isOnlyRegularAndItalic() {
      return (
        JSON.stringify(this.font.variants) ===
        JSON.stringify(["regular", "italic"])
      );
    },
    hasItalicVariant() {
      const italicVariant = this.font.variants.find(variant =>
        variant.includes("italic")
      );
      return italicVariant !== undefined;
    },
    italicVariantsString() {
      return `:ital,wght@${this.italicWeightParamsString}`;
    },
    italicWeightParamsString() {
      const weightPairs = this.font.variants.map(variant => {
        const isItalic = variant.includes("italic");
        const italicNumber = isItalic ? 1 : 0;
        const weight = variant.match(/\d+/g) || "400";
        return `${italicNumber},${weight}`;
      });
      return weightPairs.sort().join(";");
    },
    regularVariantsString() {
      return `:wght@${this.regularWeightParamsString}`;
    },
    regularWeightParamsString() {
      const weights = this.font.variants.map(variant => {
        return variant.match(/\d+/g) || "400";
      });
      const uniqueWeights = new Set(weights);
      return [...uniqueWeights].join(";");
    }
  },
  async mounted() {
    this.isLoading = true;
    await this.readFont(this.decodedFontFamily);
    this.linkTag = document.createElement("link");
    this.linkTag.href = this.fontURL;
    this.linkTag.rel = "stylesheet";
    document.head.appendChild(this.linkTag);
    this.isLoading = false;
  },
  destroyed() {
    this.linkTag.parentNode.removeChild(this.linkTag);
  },
  methods: {
    ...mapActions(["readFont"])
  }
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
h1 {
  font-size: 2.4rem;
  color: var(--green-dark);
}
h3 {
  font-size: 1.6rem;
  color: var(--green-dark);
  margin-bottom: 1rem;
}

.button--back {
  --border-bottom-width: 3px;
  background: var(--green);
  color: var(--green-lighter);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
  border-radius: 10px;
  text-transform: uppercase;
  border-bottom: var(--border-bottom-width) solid var(--green-dark);
}

.button--back:active {
  margin-top: var(--border-bottom-width);
  border-bottom: none;
}
</style>
