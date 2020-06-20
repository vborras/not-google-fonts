<template>
  <section>
    <Loader v-if="loading"></Loader>
    <FontCard
      v-for="font in paginatedFonts"
      :key="font.family"
      :font="font"
    ></FontCard>
    <button @click="getNextPageFonts">Next Page</button>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Loader from "@/components/Loader";
import FontCard from "@/components/FontCard";

export default {
  name: "Home",
  components: { Loader, FontCard },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState(["paginatedFonts"])
  },
  async created() {
    this.loading = true;
    await this.listFonts();
    await this.getNextPageFonts();
    this.loading = false;
  },
  methods: {
    ...mapActions(["listFonts"]),
    ...mapMutations(["getNextPageFonts"])
  }
};
</script>
