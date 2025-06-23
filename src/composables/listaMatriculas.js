import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import api from "@/services/api";

export default function useListaMatriculas() {
  const router = useRouter();

  const matriculas = ref([]);
  const loading = ref(false);

  const headers = [
    { title: "Nome", key: "nome" },
    { title: "E-mail", key: "email" },
    { title: "Curso", key: "curso" },
    { title: "Nascimento", key: "data_nascimento" },
    { title: "Ações", key: "actions", sortable: false },
  ];

  const carregar = async () => {
    loading.value = true;
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/alunos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      matriculas.value = res.data?.data?.data || [];
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
      alert("Erro ao carregar dados");
    } finally {
      loading.value = false;
    }
  };

  const editar = (item) => {
    router.push({ path: "/matricular", query: { id: item.id } });
  };

  const excluir = async (id) => {
    if (!confirm("Excluir matrícula?")) return;
    try {
      await api.delete(`/alunos/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      await carregar();
    } catch (err) {
      alert("Erro ao excluir");
      console.error(err);
    }
  };

  const sair = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  onMounted(carregar);

  return {
    headers,
    matriculas,
    loading,
    editar,
    excluir,
    sair,
  };
}
