import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import ListaMatriculasView from "@/views/ListaMatriculasView.vue";
import MatricularView from "@/views/MatricularView.vue";

const routes = [
  { path: "/", name: "Login", component: LoginView },
  {
    path: "/listar",
    name: "Listar",
    component: ListaMatriculasView,
    meta: { requiresAuth: true },
  },
  {
    path: "/matricular",
    name: "Matricular",
    component: MatricularView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ Guard de navegação para proteger rotas
router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem("token");

  // Bloqueia acesso a rotas protegidas se não estiver logado
  if (to.meta.requiresAuth && !isAuth) {
    return next({ path: "/" });
  }

  // Bloqueia acesso ao login se já estiver logado
  if (to.path === "/" && isAuth) {
    return next({ path: "/listar" });
  }

  next();
});

export default router;
