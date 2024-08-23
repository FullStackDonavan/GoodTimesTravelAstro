<template>
  <BasicSection class="mx-auto mt-20">
    <div class="px-4 pb-8 sm:px-8">
      <!-- <ParagraphSubHeading>
        {{ IntroText.SubHeading }}
      </ParagraphSubHeading> -->
      <HeadlineTwo>{{ IntroText.Heading }}</HeadlineTwo>
      <ParagraphDescription>
        {{ IntroText.description }}
      </ParagraphDescription>
    </div>
  </BasicSection>
</template>

<script>
export default {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading:
          "Relying Solely On Referrals And Word Of Mouth Is No Longer Enough For Businesses. Smart Business Owners Now Integrate Digital Marketing Into Their Marketing Plan",
        Heading: "Embark on Your Journey with Us",
        description:
          "It's time to turn your travel dreams into reality. Experience unparalleled comfort, safety, and convenience with our comprehensive transportation solutions. Whether it's a short trip or a long-distance adventure, we're here to ensure your journey is nothing short of exceptional. Trust us to take you there.",
      },
    };
  },
};
</script>