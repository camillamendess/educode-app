# Jogo Educativo de Lógica de Programação

Aplicativo móvel gamificado para ensinar lógica de programação a iniciantes, usando microlearning: lições curtas, exercícios práticos com feedback imediato, XP, ofensiva diária e ranking.

Projeto acadêmico.

## Sumário

- [Problema](#problema)
- [Funcionalidades do MVP](#funcionalidades-do-mvp)
- [Stack](#stack)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Ideia central: exercícios guiados por dados](#ideia-central-exercícios-guiados-por-dados)
- [Backend (Supabase)](#backend-supabase)
- [Convenções](#convenções)

## Problema

O primeiro contato com lógica de programação costuma ter altas taxas de reprovação e evasão, porque as aulas tradicionais são abstratas. O app transforma o conteúdo em lições diárias de poucos minutos, com mecânicas de jogo que incentivam a constância.

## Funcionalidades do MVP

| Funcionalidade                                                                  | Prioridade |
| ------------------------------------------------------------------------------- | ---------- |
| Cadastro, login e edição de perfil                                              | MUST       |
| Trilha de módulos com bloqueio e desbloqueio                                    | MUST       |
| Exercícios: múltipla escolha, preenchimento de lacuna e drag-and-drop de blocos | MUST       |
| Feedback imediato com explicação após cada resposta                             | MUST       |
| XP e ofensiva (streak)                                                          | MUST       |

Módulos iniciais: Variáveis, Condicionais e Laços de Repetição.

Fora do escopo do MVP: painel administrativo, multiplayer, compras no app e execução de código real.

## Stack

| Camada            | Tecnologia                                                   |
| ----------------- | ------------------------------------------------------------ |
| App               | React Native + Expo (TypeScript)                             |
| Navegação         | Expo Router (rotas baseadas em arquivos)                     |
| Estilo            | NativeWind v4 (Tailwind CSS para React Native)               |
| Estado global     | Zustand                                                      |
| Dados do servidor | TanStack React Query                                         |
| Gestos e animação | react-native-gesture-handler + react-native-reanimated       |
| Backend           | Supabase (Auth, PostgreSQL, Row Level Security, funções RPC) |

## Como rodar o projeto

Pré-requisitos: Node.js LTS, Git, app Expo Go no celular (ou emulador Android/iOS).

```bash
git clone https://github.com/SEU_USUARIO/logica-app.git
cd logica-app
npm install
cp .env.example .env    # preencher com as chaves do Supabase
npx expo start
```

Escaneie o QR code com o Expo Go (Android) ou com a câmera (iOS).

Variáveis de ambiente (`.env`):

```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```

O arquivo `.env` não vai para o repositório. Apenas o `.env.example`, sem valores.

## Estrutura de pastas

```
logica-app/
├── app/                        # rotas (Expo Router)
│   ├── (auth)/
│   │   ├── login.tsx
│   │   ├── cadastro.tsx
│   │   └── recuperar-senha.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx           # trilha
│   │   ├── ranking.tsx
│   │   └── perfil.tsx
│   ├── licao/[id].tsx          # player de lição
│   ├── resultado/[id].tsx      # resultado da lição
│   └── _layout.tsx             # layout raiz, providers, import do global.css
├── src/
│   ├── components/             # componentes genéricos (Button, Card, ProgressBar)
│   ├── features/
│   │   ├── exercises/          # MultipleChoice, FillBlank, DragBlocks + validadores
│   │   ├── trail/              # trilha e módulos
│   │   └── gamification/       # XP, ofensiva, ranking
│   ├── lib/supabase.ts         # cliente Supabase
│   ├── hooks/
│   ├── store/                  # stores Zustand
│   └── types/
├── supabase/
│   ├── migrations/             # schema do banco versionado
│   └── seed.sql                # conteúdo inicial (módulos, lições, exercícios)
├── global.css                  # diretivas do Tailwind
├── tailwind.config.js          # tokens de design (cores, fontes, espaçamento)
├── .env.example
└── README.md
```

Regra prática: `app/` só contém telas e navegação. Lógica e componentes ficam em `src/`.

## Ideia central: exercícios guiados por dados

Cada exercício é um registro no banco com um campo `type` e um `content` em JSON. O app lê o `type` e renderiza o componente correspondente. Para criar conteúdo novo basta inserir dados, sem publicar nova versão do app.

```json
{
  "id": "ex-cond-03",
  "type": "drag_blocks",
  "prompt": "Monte o código que imprime 'maior' se x > 10",
  "blocks": ["se (x > 10)", "imprima('maior')", "fim_se"],
  "answer": [0, 1, 2],
  "explanation": "O bloco 'se' avalia a condição antes de executar o que está dentro."
}
```

Tipos suportados: `multiple_choice`, `fill_blank`, `drag_blocks`.

Fluxo de uma lição:

1. O app carrega os exercícios da lição.
2. Cada resposta é validada localmente, com feedback instantâneo (meta: até 1,5 s).
3. Ao final, o app envia as respostas para a função `complete_lesson` no servidor.
4. O servidor confirma o resultado, concede XP, atualiza a ofensiva e verifica desbloqueio de módulo.

## Backend (Supabase)

### Tabelas principais

```
profiles             (id, display_name, xp_total, streak_count, last_activity_date)
modules              (id, title, order)
lessons              (id, module_id, order)
exercises            (id, lesson_id, type, content jsonb)
exercise_completions (user_id, exercise_id, completed_at)   PK (user_id, exercise_id)
lesson_attempts      (id, user_id, lesson_id, score, created_at)
xp_events            (id, user_id, exercise_id, amount, created_at)
```

## Convenções

- **Branches:** `main` (estável), `feat/nome-da-feature` para cada funcionalidade.
- **Commits:** padrão Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).
- **Código:** TypeScript em todo o projeto. Componentes em snake-case, hooks começando com `use`.
- **Estilo:** classes NativeWind. Cores e fontes sempre pelos tokens do `tailwind.config.js`, nunca valores soltos.
