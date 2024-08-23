<script>
import BasicSection from "../../../components/containers/BasicSection.vue";
import GridTwoColumns from "../../../components/elements/grid/GridTwoColumns.vue";
import HeadlineTwo from "../../../components/elements/html/HeadlineTwo.vue";
import ParagraphDescription from "../../../components/elements/html/ParagraphDescription.vue";
import optimizedImage from "../../../assets/happy-kids.jpg?w=800&webp";
import ColumnAnimated from "../../ColumnAnimated.vue";
export default {
  name: "Ideal Customers Section",
  components: {
    BasicSection,
    GridTwoColumns,
    HeadlineTwo,
    ParagraphDescription,
    ColumnAnimated,
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
          "To Expand Your Business, Increase Online Leads, Calls, And Revenue",
        Headline: "Groups of All Sizes",
        description:
          "Every trip comes with its own unique needs. Good Time Travel's charter services are designed to provide a comfortable, smooth, and relaxing ride. Whether multiple pick-up locations or routine options, we will work hard to ensure your traveling needs are met to the best of our ability.",
      },
      optimizedImage,
    };
  },
};
</script>
<template>
  <ColumnAnimated animationClass="slideInTop">
    <BasicSection class="mx-auto mt-20">
      <GridTwoColumns>
        <div class="px-4 sm:px-8">
          <img :src="optimizedImage" alt="Happy Kids" />
        </div>
        <div class="px-4 sm:px-8">
          <HeadlineTwo>{{ IntroText.Headline }}</HeadlineTwo>
          <ParagraphDescription>
            {{ IntroText.description }}
          </ParagraphDescription>
        </div>
      </GridTwoColumns>
    </BasicSection>
  </ColumnAnimated>
</template>

