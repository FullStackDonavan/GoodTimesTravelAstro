<script>
import SectionContainer from "../../../components/containers/SectionContainer.vue";
import GridTwoColumns from "../../../components/elements/grid/GridTwoColumns.vue";
import HeadlineOneHero from "../../../components/elements/html/HeadlineOneHero.vue";
import ParagraphSubHeadingHero from "../../../components/elements/html/ParagraphSubHeadingHero.vue";
import ParagraphDescriptionHero from "../../../components/elements/html/ParagraphDescriptionHero.vue";
import CardDeckThreeColumns from "../../../components/elements/decks/CardDeckThreeColumns.vue";
import Card from "../../../components/elements/cards/Card.vue";
import CtaButton from "../../../components/elements/html/CtaButton.vue";

// Import the optimized image using vite-imagetools
import optimizedImage from "../../../assets/charter-bus.jpg?w=800&webp";

export default {
  components: {
    SectionContainer,
    GridTwoColumns,
    HeadlineOneHero,
    ParagraphSubHeadingHero,
    ParagraphDescriptionHero,
    CardDeckThreeColumns,
    Card,
    CtaButton,
  },
  data() {
    return {
      IntroText: {
        SubHeading:
          "Embark on a Journey of Comfort, Convenience, and Exceptional Service",
        Heading:
          "Explore Boundless Adventures with Good Time Travel Bus Charters",
        Description:
          "At Good Time Travel, we redefine the travel experience with our premier bus charter services. From scenic road trips to group excursions, we prioritize your comfort and satisfaction every step of the way. With our luxurious amenities, expert staff, and commitment to excellence, your journey with us is guaranteed to be memorable and stress-free.",
      },
      Featured: [
        {
          id: 1,
          title: "Unmatched Comfort",
          description:
            "Travel in style and relaxation with our luxurious reclining seats and spacious interiors, ensuring a smooth and enjoyable ride for all passengers.",
        },
        {
          id: 2,
          title: "Convenient Amenities",
          description:
            "Stay connected and entertained throughout your journey with onboard flat screen monitors and charging ports, providing entertainment and power at your fingertips.",
        },
        {
          id: 3,
          title: "Expert Service",
          description:
            "Our dedicated and friendly staff are committed to providing top-notch service, from assistance with loading luggage to ensuring a safe and pleasant travel experience for all.",
        },
      ],
      CTA: { to: "tel:1-864-760-1263", text: "1-864-760-1263" },
      optimizedImage,
    };
  },
};
</script>

<template>
  <SectionContainer class="text-center">
    <GridTwoColumns>
      <div>
        <img :src="optimizedImage" alt="Happy Kids" class="full-width-height" />
      </div>
      <div class="p-4">
        <ParagraphSubHeadingHero>{{
          IntroText.SubHeading
        }}</ParagraphSubHeadingHero>
        <HeadlineOneHero>{{ IntroText.Heading }}</HeadlineOneHero>
        <ParagraphDescriptionHero>{{
          IntroText.Description
        }}</ParagraphDescriptionHero>
        <CardDeckThreeColumns class="hidden lg:block">
          <Card
            v-for="Feature in Featured"
            :key="Feature.id"
            :title="Feature.title"
            :description="Feature.description"
          />
        </CardDeckThreeColumns>
        <CtaButton :to="CTA.to">{{ CTA.text }}</CtaButton>
      </div>
    </GridTwoColumns>
  </SectionContainer>
</template>

<style scoped>
.full-width-height {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
}
</style>
