<template>
  <v-container max-width="800" class="py-10">
    <v-row align="center" justify="space-between" class="mb-6">
      <v-col cols="12" md="7">
        <v-row no-gutters align="center">
          <v-icon color="primary" class="me-2">mdi-account-plus</v-icon>
          <v-col>
            <h2 class="text-h5 font-weight-bold">Nova Matrícula</h2>
            <p class="text-body-2 text-grey-darken-1">
              Preencha corretamente os dados do aluno.
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="5" class="d-flex justify-end">
        <v-btn
          variant="outlined"
          color="primary"
          prepend-icon="mdi-arrow-left"
          @click="$router.back()"
        >
          Voltar para lista
        </v-btn>
      </v-col>
    </v-row>

    <v-form @submit.prevent="salvar" v-model="formValid">
      <v-card elevation="4" rounded="xl">
        <v-card-text>
          <v-card-title class="text-subtitle-1 font-weight-medium">
            👤 Informações Pessoais
          </v-card-title>
          <v-divider class="mb-4" />

          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.nome"
                label="Nome completo"
                :rules="[rules.required]"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                density="comfortable"
                required
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                :rules="[rules.required, rules.email]"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                density="comfortable"
                required
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.data_nascimento"
                label="Nascimento (AAAA-MM-DD)"
                :rules="[rules.required, rules.date]"
                prepend-inner-icon="mdi-cake-variant"
                maxlength="10"
                variant="outlined"
                density="comfortable"
                required
              />
            </v-col>
          </v-row>

          <v-card-title class="text-subtitle-1 font-weight-medium mt-6">
            🎓 Dados Acadêmicos
          </v-card-title>
          <v-divider class="mb-4" />

          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.curso_id"
                label="ID do Curso"
                type="number"
                :rules="[rules.required]"
                prepend-inner-icon="mdi-school"
                variant="outlined"
                density="comfortable"
                required
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider />
        <v-card-actions class="justify-end px-4 py-4">
          <v-btn
            type="submit"
            color="primary"
            size="large"
            :loading="loading"
            prepend-icon="mdi-content-save"
          >
            Salvar Matrícula
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script setup>
import useMatricula from "@/composables/MatriculasView";
const { route, form, rules, loading, formValid, salvar } = useMatricula();
</script>
