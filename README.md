# 🍔 DevBurger

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Payment-635BFF?style=for-the-badge&logo=stripe&logoColor=white)

### Sistema Completo de Hamburgueria Online

Aplicação Front-end desenvolvida em React para gerenciamento de pedidos, catálogo de produtos, carrinho de compras e área administrativa.

</div>

---

# 📖 Sobre o Projeto

O **DevBurger** é uma aplicação web moderna desenvolvida para simular uma plataforma profissional de pedidos online para hamburguerias.

O sistema oferece uma experiência completa para clientes e administradores, permitindo navegação por categorias, gerenciamento de carrinho, checkout e 
administração dos produtos.

O projeto foi desenvolvido aplicando conceitos modernos de React, componentização, gerenciamento de rotas e integração com serviços externos.

---

# 🚀 Funcionalidades

## 👤 Área do Cliente

### 🍔 Catálogo de Produtos

- Listagem de produtos
- Categorias dinâmicas
- Promoções em destaque
- Navegação intuitiva

### 🛒 Carrinho de Compras

- Adicionar produtos
- Remover produtos
- Atualizar quantidades
- Resumo do pedido
- Cálculo automático do valor total

### 💳 Checkout

- Integração com Stripe
- Simulação de pagamento
- Finalização segura do pedido

---

## 🔐 Área Administrativa

### 📦 Gerenciamento de Produtos

- Cadastro de produtos
- Edição de produtos
- Remoção de produtos
- Organização por categorias

### 📊 Dashboard

- Visualização de informações
- Controle operacional
- Gestão de pedidos

### 📑 Tabelas Administrativas

- Listagem de dados
- Controle simplificado
- Interface otimizada

---

# 🛠️ Tecnologias Utilizadas

## Front-end

- React.js
- React Router DOM
- JavaScript ES6+
- Styled Components

## Integrações

- Stripe Payment

## Ferramentas

- Git
- GitHub
- VS Code

---

# 📂 Estrutura do Projeto

```text
src/
│
├── assets/
│
├── components/
│   ├── Button
│   ├── CardButton
│   ├── CardProduct
│   ├── CartItems
│   ├── CartResume
│   ├── CategoriesCarousel
│   ├── Header
│   ├── Footer
│   ├── OfferCarousel
│   ├── SideNavAdmin
│   ├── Stripe
│   └── Table
│
├── config/
│
├── containers/
│   ├── Admin
│   ├── Cart
│   ├── Checkout
│   ├── CompletePayment
│   ├── Home
│   ├── Login
│   ├── Menu
│   └── Register
│
├── hooks/
│   ├── CartContext.jsx
│   ├── Index.jsx
│   └── UserContext.jsx
│
├── layouts/
│   ├── AdminLayout
│   └── UserLayout
│
├── routes/
│   └── index.jsx
│
├── services/
│   └── api.js
│
├── styles/
│
├── utils/
│   ├── formatDate.js
│   └── formatPrice.js
│
└──  main.jsx

```

---

# ⚙️ Instalação

## Clone o repositório

```bash
git clone https://github.com/Edvaldo-jb-Junior/front-end-devburger.git
```

## Entre na pasta

```bash
cd front-end-devburger
```

## Instale as dependências

```bash
npm install
```

ou

```bash
yarn
```

## Execute o projeto

```bash
npm run dev
```

ou

```bash
yarn dev
```

---

# 📱 Responsividade

O sistema foi desenvolvido para funcionar em:

- Smartphones
- Tablets
- Notebooks
- Desktop

---

# 🎨 Arquitetura

O projeto segue uma arquitetura baseada em:

- Componentização
- Reutilização de código
- Separação de responsabilidades
- Hooks personalizados
- Rotas protegidas
- Serviços desacoplados

---

# 🔒 Segurança

Boas práticas implementadas:

- Rotas separadas por perfil
- Integração segura com pagamentos
- Organização modular
- Controle de acesso administrativo

---

# 📈 Melhorias Futuras

- [ ] Histórico de pedidos
- [ ] Rastreamento de entrega
- [ ] Dashboard analítico
- [ ] Cupons de desconto
- [ ] Favoritos
- [ ] Notificações em tempo real

---

# 🎓 Conceitos Aplicados

Durante o desenvolvimento foram praticados:

- React Hooks
- Componentização
- Context API
- React Router
- Styled Components
- Consumo de APIs
- Integração com Stripe
- Gerenciamento de Estado
- Boas práticas de Front-end

---

# 👨‍💻 Autor

### Edvaldo Jose Barbosa Junior

Desenvolvedor Front-end

📌 GitHub:
https://github.com/Edvaldo-jb-Junior


---

# 📄 Licença

Este projeto está sob a licença MIT.

---

<div align="center">

🍔 DevBurger

Uma experiência moderna para pedidos online.

Desenvolvido por Edvaldo Jose Barbosa Junior 🚀

</div>
