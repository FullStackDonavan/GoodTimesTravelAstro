<script>
export default {
  name: "IndustryCard",
  props: {
    title: String,
    image: String,
    description: String,
    url: String,
  },
};
</script>

<template>
  <div>
    <div class="mx-auto">
      <div class="flex items-stretch -mx-4">
        <div class="flex-1 p-4">
          <div
            class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg"
          >
            <div
              class="p-4 bg-blue-400 dark:bg-amber-400 min-h-24 transition duration-500"
            >
              <h2
                class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white transition duration-500"
              >
                {{ title }}
              </h2>
            </div>
            <!-- <p class="text-md text-justify">{{ description }}</p> -->
            <div>
              <img class="min-w-64" :src="image" alt="Bus Driver" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
</style>
