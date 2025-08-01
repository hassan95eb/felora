<template>
  <header class="w-full h-[70px] md:h-[110px] bg-black-200">
    <div class="flex h-full py-2 justify-between">
      <div class="flex-1 h-full">
        <NuxtLink to="/" class="h-full">
          <NuxtImg
            src="/images/feloraphoto-logo.jpg"
            class="h-full"
            alt="felora logo"
          />
        </NuxtLink>
      </div>
      <div class="flex-6">
        <div class="mx-auto">
          <ul class="flex">
            <li v-for="nav_link in navigationData.nav_links" class="text-white">
              <NuxtLink :to="nav_link.path" :key="nav_link.path">
                {{ nav_link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </header>
</template>

<script setup>
import { useNavigation } from "~/composables/useNavigation";
const navigationData = await useNavigation();
</script>

<style scoped></style>
