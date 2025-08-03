<template>
  <header class="w-full h-[70px] md:h-[110px] bg-black-200 p-2">
    <div class="flex h-full py-2 justify-between items-center">
      <div class="w-1/2 md:w-1/6"></div>
      <div class="hidden md:block md:w-4/6">
        <div class="hidden md:block md:w-1/2 mx-auto">
          <ul class="flex justify-between items-center">
            <li
              v-for="nav_link in navigationData.nav_links"
              class="text-white text-xl relative whitespace-nowrap group hover:border-b-2 hover:border-feloratext"
            >
              <NuxtLink :to="nav_link.path" :key="nav_link.path">
                {{ nav_link.title }}
              </NuxtLink>
              <!--sub_menu-->
              <ul
                v-if="nav_link.sub_links"
                class="flex-col absolute top-full box-border -left-10 rounded transition-all duration-300 ease-in-out opacity-0 invisible group-hover:visible group-hover:opacity-100"
              >
                <li
                  v-for="sub_nav_link in nav_link.sub_links"
                  class="text-lg text-center whitespace-nowrap px-3 py-2 hover:text-feloratext hidden group-hover:block"
                >
                  <NuxtLink :to="sub_nav_link.path" :key="sub_nav_link.path">
                    {{ sub_nav_link.title }}
                  </NuxtLink>
                </li>
              </ul>
              <!--sub_menu-->
            </li>
          </ul>
        </div>
      </div>
      <div class="w-1/2 md:w-1/6 h-full">
        <NuxtLink to="/" class="h-full">
          <NuxtImg
            src="/images/feloraphoto-logo.png"
            class="h-full mx-auto ml-2"
            alt="felora logo"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useNavigation } from "~/composables/useNavigation";
const navigationData = await useNavigation();
</script>

<style scoped></style>
