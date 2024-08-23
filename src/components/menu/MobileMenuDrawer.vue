<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  showSideDrawer: boolean;
}>();

const emit = defineEmits<{
  (e: "closeDrawer"): void;
}>();

function emitCloseEvent() {
  emit("closeDrawer");
}
</script>

<template>
  <div
    :class="[
      'fixed z-40 top-0 left-0 h-screen w-screen transition-transform duration-700 p-0 overflow-y-auto bg-white dark:bg-black',
      props.showSideDrawer
        ? 'transform translate-x-0'
        : 'transform translate-x-full',
    ]"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <h5
      id="drawer-navigation-label"
      class="text-base font-semibold text-gray-500 dark:text-gray-200 uppercase hover:dark:text-green-400 hover:text-green-400"
    >
      Menu
    </h5>

    <button
      @click="emitCloseEvent"
      type="button"
      aria-controls="drawer-navigation"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500 dark:text-gray-200 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-black dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>

    <div class="py-4 overflow-y-auto my-12">
      <ul class="space-y-2">
        <li>
          <a
            href="/"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icon
              name="material-symbols:house"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              size="50"
            />
            <span class="ml-3">Home</span>
          </a>
        </li>
        <!-- <li>
          <a
            href="/about-us"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icon
              name="fluent:people-community-48-filled"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              size="50"
            />

            <span class="flex-1 ml-3 whitespace-nowrap">About Us</span>
          </a>
        </li> -->
        <li>
          <a
            href="/blog/"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icon
              name="zondicons:news-paper"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              size="50"
            />

            <span class="flex-1 ml-3 whitespace-nowrap">Blogs</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Ensure smooth transitions for the drawer */
transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style>
