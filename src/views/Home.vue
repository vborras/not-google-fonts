<template>
  <section>
    <Loader v-if="loading"></Loader>
  </section>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  name: "Home",
  components: { Loader },
  data() {
    return {
      loading: true
    };
  }
};
</script>
