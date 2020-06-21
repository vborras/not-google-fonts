<template>
  <div>
    <Loader v-if="isLoading" />
    <section v-else>
      <h1>{{ font.family }}</h1>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loader from "@/components/Loader";

export default {
  name: "Font",
  components: { Loader },
  props: {
    fontFamily: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState(["font"]),
    decodedFontFamily() {
      return this.fontFamily.replace("+", " ");
    }
  },
  created() {
    this.isLoading = true;
    this.readFont(this.decodedFontFamily);
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["readFont"])
  }
};
</script>

<style scoped></style>
