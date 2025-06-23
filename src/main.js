// src/main.js

import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import router from "./router";
import vuetify from "./plugins/vuetify";

// Estilos globais e ícones
import "@mdi/font/css/materialdesignicons.css"; // Ícones MDI (Material Design Icons)
import "vuetify/styles"; // Estilos base do Vuetify

// Montar o app
createApp(App).use(router).use(vuetify).mount("#app");
