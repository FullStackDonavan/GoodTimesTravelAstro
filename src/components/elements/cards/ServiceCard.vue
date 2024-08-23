<template>
  <div class="p-4">
    <div
      class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100 transition duration-500"
    >
      <div class="p-4 bg-blue-400 dark:bg-amber-400 transition duration-500">
        <h2
          class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white transition duration-500"
        >
          {{ title }}
        </h2>
      </div>
      <p class="text-md text-center p-3">
        {{ description }}
      </p>
      <div>
        <!-- <img :src="image" /> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "IndustryCard",
  props: {
    title: String,
    image: String,
    description: String,
  },
};
</script>

<style>
</style>