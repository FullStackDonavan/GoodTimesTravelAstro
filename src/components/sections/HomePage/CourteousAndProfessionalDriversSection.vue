<script>
import BasicSection from "../../../components/containers/BasicSection.vue";
import GridTwoColumns from "../../../components/elements/grid/GridTwoColumns.vue";
import HeadlineTwo from "../../../components/elements/html/HeadlineTwo.vue";
import ParagraphDescription from "../../../components/elements/html/ParagraphDescription.vue";
import optimizedImage from "../../../assets/Bus-Driver.jpg?w=800&webp";
export default {
  name: "TwoColumnSection",
  components: {
    BasicSection,
    GridTwoColumns,
    HeadlineTwo,
    ParagraphDescription,
  },
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String,
  },
  data() {
    return {
      IntroText: {
        SubHeading:
          "Empower your business to new heights with our marketing blueprint. Let us make it effortless for your customers to find you!",
        Heading: "Courteous and Professional Drivers",
        description:
          "As a professional company we take pride in the importance of polite and helpful drivers. Your safety and enjoyment are our top priority.",
      },
      optimizedImage,
    };
  },
};
</script>

<template>
  <BasicSection class="mx-auto mt-20">
    <GridTwoColumns>
      <div class="px-4 sm:px-8">
        <HeadlineTwo>
          {{ IntroText.Heading }}
        </HeadlineTwo>
        <ParagraphDescription>
          {{ IntroText.description }}
        </ParagraphDescription>
      </div>
      <div class="px-4 sm:px-8">
        <img :src="optimizedImage" alt="Bus Driver" />
      </div>
    </GridTwoColumns>
  </BasicSection>
</template>



<style scoped>
</style>