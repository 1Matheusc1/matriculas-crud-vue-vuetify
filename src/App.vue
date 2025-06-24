<template>
  <v-app>
    <!-- Barra superior -->
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title class="d-flex align-center">
        <v-icon class="mr-2">mdi-school</v-icon>
        Sistema de Matrículas
      </v-toolbar-title>

      <v-spacer />

      <!-- Avatar com menu -->
      <v-menu location="bottom end">
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar size="32">
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Sair</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Menu lateral (Drawer) -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isMobile"
      :temporary="isMobile"
      app
    >
      <v-list nav dense active-color="primary">
        <v-list-subheader class="text-grey">Menu Principal</v-list-subheader>

        <v-list-item to="/" title="Conecte-se" prepend-icon="mdi-login" />
        <v-list-item
          to="/listar"
          title="Listar Matrículas"
          prepend-icon="mdi-format-list-bulleted"
        />
        <v-list-item
          to="/matricular"
          title="Nova Matrícula"
          prepend-icon="mdi-account-plus"
        />

        <v-divider class="my-2" />

        <v-list-item
          @click="logout"
          title="Sair"
          prepend-icon="mdi-logout"
          class="text-red"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Área principal -->
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const isMobile = ref(window.innerWidth < 960);
const router = useRouter();

// Atualiza se for mobile em resize
const handleResize = () => {
  isMobile.value = window.innerWidth < 960;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const logout = () => {
  localStorage.removeItem("token");
  router.push("/");
};
</script>
