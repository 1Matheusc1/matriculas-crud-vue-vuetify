// src/plugins/vuetify.js

// Importa os estilos principais do Vuetify...
import "vuetify/styles";

// Cria a instância do Vuetify
import { createVuetify } from "vuetify";

// Importa todos os componentes e diretivas disponíveis
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Exporta o Vuetify configurado com componentes e diretivas
export default createVuetify({
  components,
  directives,
});
