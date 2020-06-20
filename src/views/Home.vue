<template>
  <section>
    <Loader v-if="loading"></Loader>
    <p v-for="font in fonts" :key="font.family">{{ font }}</p>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loader from "@/components/Loader";

export default {
  name: "Home",
  components: { Loader },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState(["fonts"])
  },
  async created() {
    this.loading = true;
    await this.listFonts();
    this.loading = false;
  },
  methods: {
    ...mapActions(["listFonts"])
  }
};
</script>
