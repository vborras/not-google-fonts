<template>
  <section>
    <Loader v-if="loading"></Loader>
    <FontCard v-for="font in fonts" :key="font.family" :font="font"></FontCard>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
