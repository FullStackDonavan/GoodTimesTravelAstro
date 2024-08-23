<script>
import BasicSection from "../containers/BasicSection.vue";
import HeadlineTwo from "../elements/html/HeadlineTwo.vue";
import ParagraphDescription from "../elements/html/ParagraphDescription.vue";
import CardDeckFourColumns from "../elements/decks/CardDeckFourColumns.vue";
import IndustryCard from "../elements/cards/IndustryCard.vue";

// Import optimized images
import airportTransfersImage from "../../assets/Airport-Transfers.jpg?w=356&webp";
import longDistanceCharterImage from "../../assets/Long-Distance-Charter-Bus.jpg?w=356&webp";
import corporateEventImage from "../../assets/Corporate-Event.jpg?w=356&webp";
import clemsonStudentsImage from "../../assets/ClemsonStudents.jpg?w=356&webp";

export default {
  name: "TransportationServicesSection",
  components: {
    BasicSection,
    HeadlineTwo,
    ParagraphDescription,
    CardDeckFourColumns,
    IndustryCard,
  },

  data() {
    return {
      IntroText: {
        SubHeading: "",
        Heading: "Navigate Your Journeys with Precision",
        description:
          "Discover a range of tailored transportation solutions to suit your every need. Whether you're heading to the airport or a cruise port, embarking on a long-distance trip, attending a corporate event, or arranging transportation for college-related activities, our reliable services ensure you reach your destination safely, comfortably, and on time.",
      },
      Services: [
        {
          id: 1,
          title: "Airport And Cruise Ports",
          image: airportTransfersImage,
        },
        {
          id: 2,
          title: "Long Distance Trips",
          image: longDistanceCharterImage,
        },
        {
          id: 3,
          title: "Corporate Events",
          image: corporateEventImage,
        },
        {
          id: 4,
          title: "College Transportation",
          image: clemsonStudentsImage,
        },
      ],
    };
  },
};
</script>

<template>
  <BasicSection class="mx-auto mt-20 px-4 sm:px-8">
    <!-- <ParagraphSubHeading> {{ IntroText.SubHeading }} </ParagraphSubHeading> -->
    <HeadlineTwo>
      {{ IntroText.Heading }}
    </HeadlineTwo>
    <ParagraphDescription>
      {{ IntroText.description }}
    </ParagraphDescription>
  </BasicSection>
  <CardDeckFourColumns class="px-4 sm:px-8">
    <IndustryCard
      v-for="Service in Services"
      :key="Service.id"
      :title="Service.title"
      :image="Service.image"
    />
  </CardDeckFourColumns>
</template>
