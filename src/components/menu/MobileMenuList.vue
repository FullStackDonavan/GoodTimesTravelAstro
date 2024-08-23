<script setup lang="ts">
</script>
<template>
  s
  <div class="py-4 overflow-y-auto my-12">
    <ul class="space-y-2">
      <MenuIconList />

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
      <li>
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
      </li>
      <li>
        <a
          href="/articles/overview"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Icon
            name="zondicons:news-paper"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            size="50"
          />

          <span class="flex-1 ml-3 whitespace-nowrap">Travel Tips</span>
        </a>
      </li>
    </ul>
  </div>
</template>