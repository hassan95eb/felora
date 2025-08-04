<template>
  <header class="w-full h-[70px] md:h-[110px] bg-headerbg p-2">
    <div class="flex h-full py-2 justify-between items-center">
      <!-- Right side: Hamburger or Spacer -->
      <div class="w-1/2 md:w-1/6">
        <button @click="toggleMenu" class="text-white md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Middle: Desktop Menu -->
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
                class="flex-col absolute top-full box-border -left-10 rounded transition-all duration-300 ease-in-out opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-headerbg"
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

      <!-- Left side: Logo -->
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

    <!-- Mobile Menu -->
    <div
      :class="[
        'fixed top-0 right-0 h-full w-64 bg-headerbg z-50 transform transition-transform duration-300 ease-in-out',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="flex justify-end p-4">
        <button @click="toggleMenu" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <ul class="flex flex-col items-center mt-10">
        <li
          v-for="nav_link in navigationData.nav_links"
          class="text-white text-xl my-4"
        >
          <NuxtLink :to="nav_link.path" @click="toggleMenu">
            {{ nav_link.title }}
          </NuxtLink>
          <ul v-if="nav_link.sub_links" class="mt-2">
            <li
              v-for="sub_nav_link in nav_link.sub_links"
              class="text-lg text-center whitespace-nowrap px-3 py-2 hover:text-feloratext"
            >
              <NuxtLink :to="sub_nav_link.path" @click="toggleMenu">
                {{ sub_nav_link.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useNavigation } from "~/composables/useNavigation";

const navigationData = await useNavigation();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>
