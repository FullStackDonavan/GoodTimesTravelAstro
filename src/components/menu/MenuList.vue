<template>
  <nav class="hidden lg:flex items-center justify-between space-x-10">
    <div class="hidden lg:flex items-center space-x-10">
      <a href="/">
        <span
          class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
        >
          Home
        </span>
      </a>

      <!-- <a href="/about-us">
        <span
          class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
        >
          About Us
        </span>
      </a> -->
      <a href="/blog/">
        <span
          class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
        >
          Blog
        </span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
/* Ensure vertical centering */
nav {
  display: flex;
  align-items: center; /* Vertically center the content */
}
</style>
