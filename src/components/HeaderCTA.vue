<template>
  <section class="p-2 bg-blue-300 dark:bg-blue-400 text-center">
    <div class="flex justify-center items-end">
      <h3
        class="mb-4 font-extrabold tracking-tight leading-none md:text-2xl lg:text-3xl text-slate-100 transition duration-500"
      >
        Call Now for a Free Quote
      </h3>
      <div class="flex flex-col">
        <!-- <a
          href="tel:1-864-760-1263"
          class="text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mx-2 mb-2 transition duration-500"
        >
          <Icon name="uil:phone-alt" color="white" size="2em" />(864) 760-1263
        </a> -->

        <CtaButton to="tel:1-864-760-1263" class="m-4"
          >(864) 760-1263</CtaButton
        >
      </div>
    </div>
  </section>
</template>

<script>
import CtaButton from "../components/elements/html/CtaButton.vue";
export default {
  components: {
    CtaButton,
  },
  name: "CTA Header",
};
</script>

<style scoped>
button {
  font-size: 1em;
}
</style>
