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
    if (this.paginatedFonts.length === 0) {
      await this.getNextPageFonts();
    }
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
  --border-bottom-width: 4px;
  padding: 1rem;
  width: 100%;
  text-align: center;
  background: var(--green);
  color: var(--green-lighter);
  border-radius: 10px;
  border: none;
  border-bottom: var(--border-bottom-width) solid var(--green-dark);
  margin: 1rem 0 4rem;
  text-transform: uppercase;
  font-size: 1.2rem;
}

.next-page-button:active {
  border-bottom: 0;
  margin-top: calc(1rem + var(--border-bottom-width));
}
</style>
