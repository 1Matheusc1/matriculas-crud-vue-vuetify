<template>
  <v-container class="fill-height d-flex align-center justify-center">
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
          Informe suas credenciais para continuar
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
          :rules="[rules.required]"
          variant="outlined"
          density="comfortable"
          class="mb-1"
          required
        />
        <!-- Feedback de erro fixo (não desloca layout) -->
        <v-alert
          v-show="loginError"
          type="error"
          variant="tonal"
          density="comfortable"
          border="start"
          class="mb-4"
          prominent
        >
          E-mail ou senha inválidos.
        </v-alert>

        <!-- Lembrar-me -->
        <v-checkbox
          v-model="remember"
          label="Lembrar-me"
          density="comfortable"
          class="mb-3"
          hide-details
        />

        <!-- Botão de login -->
        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          class="mb-2"
          :loading="loading"
        >
          Entrar
        </v-btn>

        <!-- Link de esqueci minha senha -->
        <div class="text-center">
          <v-btn
            variant="plain"
            size="small"
            class="text-primary font-weight-medium"
            @click="esqueciSenha"
          >
            Esqueci minha senha
          </v-btn>
        </div>
      </v-form>
    </v-card>
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
  login,
  rules,
} = useLogin();
</script>
