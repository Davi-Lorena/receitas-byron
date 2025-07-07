# Receitas Deliciosas (Frontend) 🧑‍🍳🍽️

![Captura de tela 2025-07-07 170609](https://github.com/user-attachments/assets/08ad9759-c4de-4bf6-8ae6-5f1bf36f78ed)

Este é o repositório frontend do projeto "Receitas Deliciosas", um site interativo de receitas desenvolvido com Next.js. Este projeto permite aos usuários visualizar, pesquisar, criar, editar e excluir receitas, proporcionando uma experiência completa de gerenciamento de conteúdo gastronômico. 🌟

**O backend correspondente a este projeto pode ser encontrado em:** [https://github.com/Davi-Lorena/receitas-byron-backend](https://github.com/Davi-Lorena/receitas-byron-backend) 🚀

## Visão Geral do Projeto 📝

O objetivo principal deste projeto é criar uma plataforma intuitiva para amantes da culinária. Ele foi desenvolvido com foco em performance, responsividade e facilidade de uso, utilizando as últimas funcionalidades do Next.js e React. ✨

### Funcionalidades Principais 📋

  * **Listagem de Receitas:** Exibe todas as receitas disponíveis em um formato de card visualmente atraente. 🖼️
  * **Detalhes da Receita:** Ao clicar em um card, o usuário é redirecionado para uma página dedicada com informações detalhadas da receita, incluindo ingredientes e modo de preparo. 📖/page.tsx]
  * **Pesquisa de Receitas:** Funcionalidade de busca para encontrar receitas por título, descrição, categoria ou ingredientes. 🔍
  * **Criação de Novas Receitas:** Um modal intuitivo permite adicionar novas receitas ao banco de dados. ➕
  * **Edição de Receitas Existentes:** Capacidade de modificar os detalhes de uma receita através de um modal de formulário pré-preenchido. ✍️
  * **Exclusão de Receitas:** Um modal de confirmação garante que as receitas não sejam excluídas acidentalmente. 🗑️
  * **Notificações Toast:** Feedback visual para ações do usuário (sucesso, erro, etc.) utilizando a biblioteca `sonner`. 🔔
  * **Componentes Reutilizáveis:** Design modular com componentes como `InfoPill` para exibir informações rápidas e `PreparationStep` para o modo de preparo. 🧩
  * **Layout Consistente:** Header e Footer globais para navegação e informações de direitos autorais. 🔝⬇️
  * **Validação de Formulários:** Utiliza `react-hook-form` e `yup` para validação robusta de dados em formulários. ✅

## Tecnologias Utilizadas 🛠️

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

  * **Next.js 15.x:** Framework React para construção de aplicações web modernas, com renderização no servidor (SSR), geração de sites estáticos (SSG) e roteamento de sistema de arquivos. ⚡
  * **React 19.x:** Biblioteca JavaScript para construção de interfaces de usuário. ⚛️
  * **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a detecção de erros. ✍️
  * **Tailwind CSS:** Framework CSS de utilitários que permite construir designs personalizados rapidamente, sem sair do seu HTML. 🎨
  * **Shadcn/ui:** Coleção de componentes de interface de usuário reutilizáveis e acessíveis, estilizados com Tailwind CSS. 📦
  * **Axios:** Cliente HTTP baseado em Promises para fazer requisições a uma API RESTful. 🌐
  * **React Hook Form:** Biblioteca para gerenciamento de formulários no React, com foco em performance e facilidade de uso. 📝
  * **Yup:** Construtor de esquemas JavaScript para análise e validação de valores. ✅
  * **Sonner:** Biblioteca para exibir notificações "toast" elegantes e personalizáveis. 🍞
  * **Lucide React:** Coleção de ícones open-source para React. 💡
  * **`next-themes`:** Solução para alternar temas (claro/escuro) em aplicações Next.js. 🌓

## Estrutura do Projeto 📂

A estrutura do diretório do projeto segue as convenções do Next.js App Router, com uma organização clara para componentes, páginas e lógica de negócio.

```
.
├── public/                     # Arquivos estáticos (imagens, etc.) 🏞️
├── src/
│   ├── app/                    # Páginas e layout da aplicação Next.js 📄
│   │   ├── globals.css         # Estilos globais 💅
│   │   ├── layout.tsx          # Layout principal da aplicação 📐
│   │   ├── page.tsx            # Página inicial (Home) 🏠
│   │   └── receitas/
│   │       ├── [id]/           # Rota dinâmica para detalhes da receita ➡️/page.tsx]
│   │       │   └── page.tsx
│   │       └── page.tsx        # Página de listagem de todas as receitas 📚
│   ├── Components/             # Componentes React reutilizáveis 🧱
│   │   ├── DeleteConfirmationModal/ # Modal de confirmação de exclusão ❓
│   │   ├── RecipeCards/        # Componente de card de receita 🃏
│   │   ├── RecipeFormModal/    # Modal de formulário para criar/editar receitas 📝
│   │   ├── footer/             # Componente de rodapé 🦶
│   │   ├── header/             # Componente de cabeçalho <thead>
│   │   ├── infoPill/           # Componente para exibição de informações rápidas (tempo de preparo, porções, etc.) ℹ️
│   │   ├── preparationStep/    # Componente para exibir passos de preparo 🔢
│   │   └── ui/                 # Componentes de UI (shadcn/ui) ✨
│   └── lib/                    # Funções utilitárias e lógica de negócio ⚙️
│       ├── api.ts              # Configuração da instância Axios para requisições à API 📡
│       ├── data.ts             # Definições de tipos de dados (ex: `Recipe`) 📊
│       ├── formValidationSchemas/ # Schemas de validação de formulários (Yup) 🛡️
│       │   └── recipeSchema.ts
│       └── utils.ts            # Funções utilitárias diversas (ex: `cn` para classes Tailwind) 📚
├── .gitignore                  # Arquivos e diretórios a serem ignorados pelo Git 🚫
├── components.json             # Configuração do shadcn/ui ⚙️
├── next.config.ts              # Configurações do Next.js 🛠️
├── package.json                # Dependências e scripts do projeto 📦
├── package-lock.json           # Lockfile de dependências 🔒
├── postcss.config.mjs          # Configuração do PostCSS (utilizado pelo Tailwind) 🎨
└── tsconfig.json               # Configurações do TypeScript 🧩
```

## Começando 🚀

Para colocar o projeto em funcionamento em sua máquina local, siga os passos abaixo:

### Pré-requisitos ✅

Certifique-se de ter as seguintes ferramentas instaladas:

  * Node.js (versão 18.x ou superior recomendada) 🌐
  * npm (gerenciador de pacotes do Node.js) ou Yarn, pnpm, ou Bun. 📦

### Instalação 💾

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Davi-Lorena/receitas-byron.git
    cd receitas-byron
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    # ou
    bun install
    ```

3.  **Configure o Backend:**
    Este frontend se comunica com uma API RESTful. Certifique-se de que o backend esteja rodando localmente na porta `3001`. Você pode clonar e iniciar o backend a partir do seguinte repositório:
    [https://github.com/Davi-Lorena/receitas-byron-backend](https://github.com/Davi-Lorena/receitas-byron-backend) 🔗

    Por padrão, o frontend espera que o backend esteja em `http://localhost:3001/api`. Se o seu backend estiver em uma porta diferente, você precisará ajustar `baseURL` no arquivo `src/lib/api.ts`. 🛠️

### Rodando o Projeto ▶️

Após a instalação das dependências e a configuração do backend, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para ver o resultado. 🖥️

As páginas são atualizadas automaticamente conforme você edita os arquivos. 🔄

### Build para Produção 🚀

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
# ou
pnpm build
# ou
bun build
```

Isso gerará os arquivos otimizados na pasta `.next/` e `out/`. 📦

### Rodando em Produção 🌐

Para iniciar o servidor de produção localmente após o build:

```bash
npm run start
# ou
yarn start
# ou
pnpm start
# ou
bun start
```

## Estilização 🎨

O projeto utiliza **Tailwind CSS** para estilização. As classes de utilitário são aplicadas diretamente no JSX, e o PostCSS é utilizado para processar os estilos.

  * Os estilos globais estão em `src/app/globals.css`. 🌍
  * As variáveis CSS para cores e tamanhos são definidas em `src/app/globals.css`, suportando o modo claro e escuro. 💡🌑
  * `tw-animate-css` é usado para animações CSS baseadas em Tailwind. 💫

## Componentes UI (Shadcn/ui) 🧩

Este projeto integra componentes da biblioteca `shadcn/ui`. Estes componentes são gerados no diretório `src/Components/ui/` e são totalmente customizáveis, permitindo flexibilidade no design e mantendo a acessibilidade. 🌟

## Fontes ✒️

O projeto utiliza `next/font` para otimizar e carregar automaticamente a fonte [Geist](https://vercel.com/font), uma nova família de fontes para Vercel. ✍️ A fonte `Inter` é usada como variável CSS. 🔡

## Saiba Mais 📖

Para mais informações sobre o Next.js, consulte os seguintes recursos:

  * [Documentação do Next.js](https://nextjs.org/docs) - Aprenda sobre os recursos e API do Next.js. 📚
  * [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo do Next.js. 👨‍🏫

Você pode verificar [o repositório Next.js no GitHub](https://github.com/vercel/next.js) - seu feedback e contribuições são bem-vindos\! ⭐

## Deploy ☁️

A maneira mais fácil de fazer o deploy de sua aplicação Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js. 🚀

Confira a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes. 📄

## Contribuição 🤝

Contribuições são bem-vindas\! Se você deseja contribuir para este projeto, por favor, siga estas diretrizes:

1.  Faça um fork do repositório. 🍴
2.  Crie uma nova branch (`git checkout -b feature/sua-feature`). 🌳
3.  Faça suas alterações e commit-as (`git commit -m 'feat: adiciona nova funcionalidade X'`). 💾
4.  Envie para a branch (`git push origin feature/sua-feature`). ⬆️
5.  Abra um Pull Request detalhando suas alterações. 📬

## Licença 📜

Este projeto está licenciado sob a licença MIT. ⚖️
