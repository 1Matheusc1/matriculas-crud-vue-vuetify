<template>
  <v-container class="mx-auto py-8" max-width="960">
    <!-- Cabeçalho -->
    <v-row class="align-center justify-space-between mb-6">
      <v-col cols="12" sm="6">
        <div>
          <h2 class="text-h4 font-weight-bold mb-1">📋 Lista de Matrículas</h2>
          <div class="text-body-2 text-grey-darken-1">
            Gerencie os alunos cadastrados...
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end align-center gap-2">
        <v-btn
          color="secondary"
          variant="tonal"
          prepend-icon="mdi-logout"
          @click="sair"
        >
          Sair
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          prepend-icon="mdi-plus"
          @click="$router.push('/matricular')"
        >
          Nova Matrícula
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tabelas -->
    <v-data-table
      :headers="headers"
      :items="matriculas"
      :loading="loading"
      loading-text="Carregando matrículas..."
      class="elevation-3 rounded-xl"
      density="compact"
      item-value="id"
      no-data-text="Nenhuma matrícula encontrada"
    >
      <template v-slot:[`item.curso`]="{ item }">
        <v-chip size="small" color="indigo" text-color="white" variant="flat">
          {{ item.curso?.titulo || "Sem curso" }}
        </v-chip>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon size="small" color="primary" @click="editar(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon size="small" color="error" @click="excluir(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script setup>
import useListaMatriculas from "@/composables/listaMatriculas";

const { headers, matriculas, loading, editar, excluir, sair } =
  useListaMatriculas();
</script>
