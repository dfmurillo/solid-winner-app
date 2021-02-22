<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="text-dark"
        />

        <q-toolbar-title class="text-black">
          <h3>Daniel's Quizzes</h3>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <app-menu :leftDrawerOpenProp="leftDrawerOpen" />

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppMenu from "@/views/common/Menu.vue";

export default {
  name: "MainLayout",
  components: { AppMenu },
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style></style>
