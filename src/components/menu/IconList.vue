<script setup>
import { ref, onMounted } from "vue";

// Define SVG paths
const sunIconPath =
  "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414z";
const moonIconPath =
  "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z";
// Theme state
const isDark = ref(false);

// Toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

// Initialize theme based on saved preference
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  isDark.value =
    savedTheme === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", isDark.value);
});
</script>

<template>
  <div class="flex items-center space-x-10">
    <!-- Container for SVG icons with pill-shaped border -->
    <div
      class="flex items-center justify-center space-x-4 border border-gray-500 rounded-full p-1 bg-white dark:bg-gray-900 initially-hidden"
      :class="{ 'initially-hidden': !isDark }"
    >
      <!-- Moon Icon with Gray Color and Blue Hover Effect -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-800 cursor-pointer transition-opacity duration-300 hover:text-blue-500"
        viewBox="0 0 20 20"
        fill="currentColor"
        @click="toggleDarkMode"
        :class="{ 'opacity-0': isDark, 'opacity-100': !isDark }"
      >
        <path :d="moonIconPath" />
      </svg>

      <!-- Sun Icon with Gray Color and Yellow Hover Effect -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-300 cursor-pointer transition-opacity duration-300 hover:text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
        @click="toggleDarkMode"
        :class="{ 'opacity-100': isDark, 'opacity-0': !isDark }"
      >
        <path :d="sunIconPath" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* Animate icon positions and hover effects */
svg {
  transition: opacity 0.3s ease;
}
svg:hover {
  transform: scale(1.2);
}
</style>