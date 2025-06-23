import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/services/api";

export default function useMatricula() {
  const route = useRoute();
  const router = useRouter();
  const loading = ref(false);
  const formValid = ref(true);

  const form = ref({
    nome: "",
    email: "",
    data_nascimento: "",
    curso_id: "",
  });

  const rules = {
    required: (v) => !!v || "Campo obrigatório",
    email: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    date: (v) => /^\d{4}-\d{2}-\d{2}$/.test(v) || "Formato: YYYY-MM-DD",
  };

  onMounted(async () => {
    if (route.query.id) {
      try {
        const res = await api.get(`/alunos/${route.query.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        form.value = res.data?.data || {};
      } catch (e) {
        alert("Erro ao buscar matrícula");
      }
    }
  });

  const salvar = async () => {
    try {
      loading.value = true;
      const token = localStorage.getItem("token");
      const payload = {
        ...form.value,
        curso_id: parseInt(form.value.curso_id),
      };

      if (route.query.id) {
        await api.put(`/alunos/${route.query.id}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await api.post("/alunos", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      router.push("/listar");
    } catch (err) {
      alert("Erro ao salvar");
    } finally {
      loading.value = false;
    }
  };

  return {
    route,
    form,
    rules,
    loading,
    formValid,
    salvar,
  };
}
