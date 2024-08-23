<template>
  <div>
    <HeadlineFour>{{ title }}</HeadlineFour>
    <ParagraphDescriptionHero>{{ description }}</ParagraphDescriptionHero>
  </div>
</template>
      

<script>
import HeadlineFour from "../../../components/elements/html/HeadlineFour.vue";
import ParagraphDescriptionHero from "../../../components/elements/html/ParagraphDescriptionHero.vue";
export default {
  name: "Card",
  components: {
    HeadlineFour,
    ParagraphDescriptionHero,
  },
  props: {
    title: String,
    description: String,
  },
};
</script>

<style>
</style>