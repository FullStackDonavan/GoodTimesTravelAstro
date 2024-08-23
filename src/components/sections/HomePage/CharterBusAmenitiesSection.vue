<script>
import BasicSection from "../../containers/BasicSection.vue";
import HeadlineTwo from "../../elements/html/HeadlineTwo.vue";
import ParagraphDescription from "../../elements/html/ParagraphDescription.vue";
import CardDeckFourColumns from "../../elements/decks/CardDeckFourColumns.vue";
import ServiceCard from "../../elements/cards/ServiceCard.vue";
import ColumnAnimated from "../../ColumnAnimated.vue";
export default {
  components: {
    BasicSection,
    HeadlineTwo,
    ParagraphDescription,
    CardDeckFourColumns,
    ServiceCard,
    ColumnAnimated,
  },
  data() {
    return {
      IntroText: {
        Heading: "Charter Bus Amenities",
        description:
          "Indulge in unparalleled comfort and safety with our charter bus amenities. Our team of courteous and attentive drivers ensures your journey is not only smooth but also enriched with exceptional service. At our company, your safety remains our top priority, complemented by a range of luxurious amenities designed to enhance your travel experience.",
      },
      Services: [
        {
          id: 1,
          title: "Flat Screen Monitors",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Immerse yourself in entertainment with our state-of-the-art flat screen monitors, providing passengers with a cinematic experience throughout their journey.",
        },
        {
          id: 2,
          title: "DVD Player And Device Charging Ports",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Experience onboard convenience with entertainment options like DVD players and charging ports to keep you connected throughout your journey.",
        },
        {
          id: 3,
          title: "Restrooms",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Travel in comfort and convenience with onboard restrooms, offering a hygienic and accessible solution for long-distance journeys.",
        },
        {
          id: 4,
          title: "Reclining Seats",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Experience ultimate relaxation with our plush, reclining seats designed to provide maximum comfort and support throughout your ride.",
        },
        {
          id: 5,
          title: "Smooth and Relaxing Ride",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Enjoy a smooth and tranquil journey from start to finish, as our expert drivers navigate the roads with precision and care.",
        },
        {
          id: 6,
          title: "Clean",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Our commitment to cleanliness ensures a pristine environment for every passenger, guaranteeing a refreshing and hygienic travel experience.",
        },
        {
          id: 7,
          title: "Responsive and Friendly Staff",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "From boarding to arrival, our attentive and approachable staff are here to assist you every step of the way, ensuring a pleasant and stress-free journey.",
        },
        {
          id: 8,
          title: "Help Loading and Unloading Luggage",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Let us take the load off your shoulders with our dedicated team on hand to assist with loading and unloading your luggage, providing seamless transitions throughout your trip.",
        },
      ],
    };
  },
};
</script>
<template>
  <BasicSection class="mx-auto mt-2">
    <div class="px-4 pt-4 sm:px-8">
      <HeadlineTwo>{{ IntroText.Heading }}</HeadlineTwo>
      <ParagraphDescription>
        {{ IntroText.description }}
      </ParagraphDescription>
    </div>
    <ColumnAnimated animationClass="slideInTop">
      <div class="px-4 sm:px-8">
        <CardDeckFourColumns>
          <ServiceCard
            v-for="Service in Services"
            :key="Service.id"
            :title="Service.title"
            :image="Service.image"
            :description="Service.description"
          />
        </CardDeckFourColumns>
      </div>
    </ColumnAnimated>
  </BasicSection>
</template>

