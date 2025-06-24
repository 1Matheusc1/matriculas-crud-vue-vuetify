<template>
  <v-container class="fill-height d-flex align-center justify-center px-4">
    <v-card
      elevation="12"
      max-width="460"
      width="100%"
      class="py-10 px-8 rounded-xl"
    >
      <!-- Logo e título -->
      <div class="text-center mb-6">
        <v-avatar color="primary" size="70" class="mb-4">
          <v-icon size="40" color="white">mdi-account-lock</v-icon>
        </v-avatar>
        <h2 class="text-h5 font-weight-bold mb-1">Acesso ao Sistema</h2>
        <p class="text-body-2 text-grey">
          Informe suas credenciais para continuar...
        </p>
      </div>

      <!-- Formulário -->
      <v-form v-model="formValid" @submit.prevent="login">
        <!-- Campo de e-mail -->
        <v-text-field
          v-model="email"
          label="E-mail"
          prepend-inner-icon="mdi-email-outline"
          type="email"
          :rules="[rules.required, rules.email]"
          variant="outlined"
          density="comfortable"
          class="mb-4"
          required
        />

        <!-- Campo de senha -->
        <v-text-field
          v-model="password"
          label="Senha"
          prepend-inner-icon="mdi-lock-outline"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="togglePassword"
          :rules="[rules.required, rules.passwordMin]"
          variant="outlined"
          density="comfortable"
          class="mb-1"
          required
        />

        <!-- Checkbox lembrar-me -->
        <v-checkbox
          v-model="remember"
          label="Lembrar-me"
          density="comfortable"
          class="mb-4"
          hide-details
        />

        <!-- Botão de login -->
        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          class="mb-3"
          :disabled="!formValid"
          :loading="loading"
        >
          Entrar
        </v-btn>

        <!-- Link "Esqueceu a senha?" abaixo do botão -->
        <div class="d-flex justify-end align-center">
          <span class="text-caption me-1">Esqueceu a senha?</span>
          <v-btn
            variant="plain"
            size="small"
            class="text-primary text-decoration-underline pa-0 min-width-0"
            @click="esqueciSenha"
          >
            CLIQUE AQUI
          </v-btn>
        </div>
      </v-form>
    </v-card>

    <!-- Modal Esqueci Senha -->
    <v-dialog v-model="forgotDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6">Recuperar Senha</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="forgotEmail"
            label="E-mail de recuperação"
            :rules="[rules.required, rules.email]"
            type="email"
            variant="outlined"
            required
          />

          <v-alert
            v-if="forgotSuccess"
            type="success"
            variant="tonal"
            class="mt-2"
          >
            Instruções enviadas para seu e-mail.
          </v-alert>

          <v-alert v-if="forgotError" type="error" variant="tonal" class="mt-2">
            Não foi possível enviar o e-mail. Verifique e tente novamente.
          </v-alert>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn text @click="forgotDialog = false">Cancelar</v-btn>
          <v-btn
            color="primary"
            :loading="forgotLoading"
            @click="enviarRecuperacao"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import useLogin from "@/composables/Login";

const {
  email,
  password,
  remember,
  loading,
  formValid,
  loginError,
  showPassword,
  togglePassword,
  esqueciSenha,
  forgotDialog,
  forgotEmail,
  forgotLoading,
  forgotSuccess,
  forgotError,
  enviarRecuperacao,
  login,
  rules,
} = useLogin();
</script>
