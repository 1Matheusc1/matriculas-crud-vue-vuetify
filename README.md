# 🎓 CRUD de Matrículas - Frontend (Vue 3 + Vuetify 3)

Este é o frontend de um sistema completo de **CRUD de matrículas** com autenticação JWT, desenvolvido com **Vue 3**, **Vuetify 3**, **Vue Router 4** e consumo de API Laravel usando **Axios**.

O projeto é leve, responsivo e organizado em `views`, `composables` e `plugins`, permitindo fácil manutenção e expansão.

---

## 🚀 Funcionalidades

- 🔐 Login com token JWT
- 📄 Listagem de alunos matriculados
- ✏️ Cadastro e edição de matrículas
- ❌ Exclusão de registros
- 🔒 Proteção de rotas (somente usuários autenticados podem acessar)
- 📱 Interface moderna com Vuetify 3
- 📁 Navegação com Drawer lateral e AppBar

---

## 🔗 Integração com a API Laravel

Este frontend consome uma **API Laravel protegida por JWT**. A comunicação entre o frontend e backend ocorre da seguinte forma:

### ▶️ Autenticação:

- Rota: `POST /api/auth/login`
- Envia: `{ email, password }`
- Retorna: `{ access_token }`
- O token é salvo em `localStorage` e enviado em todas as requisições autenticadas.

### 🛡️ Requisições protegidas:

As rotas de listagem, edição e exclusão de alunos requerem o token JWT:

```js
headers: {
  Authorization: `Bearer ${token}`;
}
```
