<template>
  <v-container class="py-10" max-width="1100">
    <!-- Cabeçalho da página -->
    <v-row class="align-center justify-space-between mb-8">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold d-flex align-center mb-1">
          <v-icon class="me-2" color="primary">mdi-format-list-bulleted</v-icon>
          Lista de Matrículas
        </h1>
        <p class="text-body-2 text-grey-darken-1">
          Gerencie os registros de alunos: edite ou exclua conforme necessário.
        </p>
      </v-col>

      <!-- Botões de ação -->
      <v-col cols="12" md="4" class="d-flex justify-end align-center flex-wrap">
        <v-btn
          color="secondary"
          variant="tonal"
          prepend-icon="mdi-logout"
          class="me-3 mb-2"
          height="44"
          rounded="lg"
          @click="sair"
        >
          Sair
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          prepend-icon="mdi-plus"
          class="mb-2"
          height="44"
          rounded="lg"
          @click="$router.push('/matricular')"
        >
          Nova Matrícula
        </v-btn>
      </v-col>
    </v-row>

    <!-- Cartão com tabela -->
    <v-card elevation="8" rounded="xl">
      <v-sheet
        class="d-flex align-center px-6 py-5"
        style="background-color: #f5f7fa; border-bottom: 1px solid #e0e0e0"
      >
        <v-icon color="primary" class="me-3">mdi-database</v-icon>
        <div>
          <div class="text-subtitle-1 font-weight-bold">
            📁 Matrículas Registradas
          </div>
          <div class="text-caption text-grey-darken-1">
            Acompanhe os dados completos dos alunos abaixo:
          </div>
        </div>
      </v-sheet>

      <!-- Data Table -->
      <v-data-table
        :headers="headers"
        :items="matriculas"
        :loading="loading"
        item-value="id"
        density="comfortable"
        loading-text="Carregando registros..."
        no-data-text="Nenhuma matrícula encontrada"
        hover
        striped
        fixed-header
        height="250"
      >
        <!-- Nome -->
        <template v-slot:[`item.nome`]="{ item }">
          <span class="font-weight-medium text-body-1">
            {{ item.nome }}
          </span>
        </template>

        <!-- Email -->
        <template v-slot:[`item.email`]="{ item }">
          <span class="text-body-2 text-grey-darken-2">
            {{ item.email }}
          </span>
        </template>

        <!-- Curso -->
        <template v-slot:[`item.curso`]="{ item }">
          <v-chip
            size="small"
            color="indigo"
            text-color="white"
            variant="flat"
            class="text-caption font-weight-medium"
          >
            {{ item.curso?.titulo || "Sem curso" }}
          </v-chip>
        </template>

        <!-- Ações -->
        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex align-center">
            <v-tooltip text="Editar matrícula" location="top">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  icon
                  size="small"
                  color="primary"
                  variant="flat"
                  class="me-1"
                  @click="editar(item)"
                >
                  <v-icon size="20">mdi-pencil</v-icon>
                </v-btn>
              </template>
            </v-tooltip>

            <v-tooltip text="Excluir matrícula" location="top">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  icon
                  size="small"
                  color="error"
                  variant="flat"
                  @click="excluir(item.id)"
                >
                  <v-icon size="20">mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>

      <!-- Rodapé -->
      <v-divider />
      <v-card-actions class="justify-end px-6 py-4">
        <v-chip
          variant="tonal"
          color="primary"
          size="small"
          class="text-caption"
        >
          Total: {{ matriculas.length }} matrícula(s)
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import useListaMatriculas from "@/composables/listaMatriculas";
const { headers, matriculas, loading, editar, excluir, sair } =
  useListaMatriculas();
</script>
