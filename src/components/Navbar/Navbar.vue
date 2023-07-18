<template>
  <header class="header">
    <nav class="header__nav container">
      <router-link class="logo" to="/">
        <img src="@/assets/img/logo.svg" alt="" class="logo__img">
      </router-link>
      <ul class="header__menu">
        <li v-for="(item, index) in links" :key="index">
          <router-link :to="item.url" class="header__link">{{ item.title }}</router-link>
        </li>
        <li>
          <router-link to="/search" class="header__link">
            <img src="@/assets/img/search.svg" alt="">
          </router-link>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const links = ref([
  { title: "Главная", url: "/" },
  { title: "Фильмы", url: "/movie" },
  { title: "Сериалы", url: "/tv" },
])
</script>

<style lang="scss" scoped></style>