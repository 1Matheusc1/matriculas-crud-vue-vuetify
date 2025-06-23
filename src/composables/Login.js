import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import api from "@/services/api";

export default function useLogin() {
  const email = ref("");
  const password = ref("");
  const remember = ref(false);
  const loading = ref(false);
  const formValid = ref(true);
  const loginError = ref(false);
  const showPassword = ref(false);
  const router = useRouter();

  const rules = {
    required: (v) => !!v || "Campo obrigatório",
    email: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
  };

  onMounted(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      email.value = savedEmail;
      remember.value = true;
    }
  });

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  const esqueciSenha = () => {
    alert("Redirecionar para recuperação de senha (em construção)");
  };

  const login = async () => {
    loginError.value = false;
    loading.value = true;

    try {
      const res = await api.post("/auth/login", {
        email: email.value,
        password: password.value,
      });

      localStorage.setItem("token", res.data.access_token);

      if (remember.value) {
        localStorage.setItem("email", email.value);
      } else {
        localStorage.removeItem("email");
      }

      router.push("/listar");
    } catch (err) {
      loginError.value = true;
    } finally {
      loading.value = false;
    }
  };

  return {
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
  };
}
