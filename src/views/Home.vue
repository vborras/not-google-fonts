<template>
  <section>
    <Loader v-if="isLoading"></Loader>
    <FontCard
      v-for="font in paginatedFonts"
      :key="font.family"
      :font="font"
    ></FontCard>
    <button
      @click="getNextPageFonts"
      class="next-page-button"
      v-if="hasNextPage"
    >
      Load more fonts
    </button>
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
      isLoading: true
    };
  },
  computed: {
    ...mapState(["paginatedFonts", "fonts"]),
    hasNextPage() {
      return this.paginatedFonts.length < this.fonts.length;
    }
  },
  async created() {
    this.isLoading = true;
    await this.listFonts();
    await this.getNextPageFonts();
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["listFonts"]),
    ...mapMutations(["getNextPageFonts"])
  }
};
</script>

<style scoped>
.next-page-button {
  padding: 1rem;
  width: 100%;
  text-align: center;
  border: 1px solid var(--grey-light);
  margin: 1rem 0 2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
}
</style>
