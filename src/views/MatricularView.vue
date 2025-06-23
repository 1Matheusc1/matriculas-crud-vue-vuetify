<template>
  <v-container class="mx-auto py-8" max-width="720">
    <!-- Cabeçalho -->
    <v-row class="align-center justify-space-between mb-6">
      <v-col cols="12" sm="6">
        <div>
          <h2 class="text-h4 font-weight-bold mb-1">📝 Nova Matrícula</h2>
          <div class="text-subtitle-2 text-grey">
            Preencha os dados abaixo...
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <v-btn color="indigo-darken-1" variant="tonal" @click="$router.back()">
          <v-icon start color="indigo-darken-2">mdi-arrow-left</v-icon>
          Voltar
        </v-btn>
      </v-col>
    </v-row>

    <v-form @submit.prevent="salvar" v-model="formValid">
      <v-row dense>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.nome"
            label="Nome"
            :rules="[rules.required]"
            variant="outlined"
            density="comfortable"
            required
          />
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.email"
            label="E-mail"
            type="email"
            :rules="[rules.required, rules.email]"
            variant="outlined"
            density="comfortable"
            required
          />
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.data_nascimento"
            label="Nascimento (YYYY-MM-DD)"
            :rules="[rules.required, rules.date]"
            maxlength="10"
            variant="outlined"
            density="comfortable"
            required
          />
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.curso_id"
            label="ID do Curso"
            type="number"
            :rules="[rules.required]"
            variant="outlined"
            density="comfortable"
            required
          />
        </v-col>
      </v-row>

      <v-btn
        type="submit"
        color="primary"
        class="mt-6"
        size="large"
        :loading="loading"
      >
        Salvar Matrícula
      </v-btn>
    </v-form>
  </v-container>
</template>
<script setup>
import useMatricula from "@/composables/MatriculasView";

const { route, form, rules, loading, formValid, salvar } = useMatricula();
</script>
