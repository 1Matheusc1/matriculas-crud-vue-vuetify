<template>
  <v-app>
    <!-- Barra superior -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="d-flex align-center">
        <v-icon class="mr-2">mdi-school</v-icon>
        Sistema de Matrículas
      </v-toolbar-title>

      <v-spacer />

      <!-- Avatar com transição -->
      <v-scale-transition>
        <v-btn icon>
          <v-avatar size="32">
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
        </v-btn>
      </v-scale-transition>
    </v-app-bar>

    <!-- Drawer com transição -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isMobile"
      :temporary="isMobile"
      app
    >
      <v-list nav dense>
        <v-list-subheader class="text-grey">Menu Principal</v-list-subheader>

        <v-list-item to="/" title="Login" prepend-icon="mdi-login" />
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

    <!-- Conteúdo principal com transição -->
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const router = useRouter();
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 960;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 960;
  });
});

const logout = () => {
  localStorage.removeItem("token");
  router.push("/");
};
</script>
