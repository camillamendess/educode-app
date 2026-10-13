import { Module, UserSummary } from "@/types/trail";

export const mockUser: UserSummary = {
  name: "Ana",
  xp: 320,
  streak: 4,
};

export const mockModules: Module[] = [
  {
    id: "mod-variaveis",
    kind: "variavel",
    title: "Variáveis",
    openKeyword: "var",
    closeKeyword: "fimvar",
    unlocked: true,
    lessons: [
      {
        id: "l-var-1",
        title: "O que é uma variável",
        status: "done",
        score: 100,
      },
      { id: "l-var-2", title: "Tipos de dados", status: "done", score: 80 },
      {
        id: "l-var-3",
        title: "Atribuição de valores",
        status: "done",
        score: 90,
      },
      { id: "l-var-4", title: "Operações com variáveis", status: "current" },
      { id: "l-var-5", title: "Entrada e saída", status: "locked" },
    ],
  },
  {
    id: "mod-condicionais",
    kind: "condicional",
    title: "Condicionais",
    openKeyword: "se",
    closeKeyword: "fimse",
    unlocked: false,
    lessons: [
      { id: "l-cond-1", title: "Verdadeiro ou falso", status: "locked" },
      { id: "l-cond-2", title: "Se e senão", status: "locked" },
      { id: "l-cond-3", title: "Operadores lógicos", status: "locked" },
      { id: "l-cond-4", title: "Condições encadeadas", status: "locked" },
    ],
  },
  {
    id: "mod-lacos",
    kind: "laco",
    title: "Laços de repetição",
    openKeyword: "enquanto",
    closeKeyword: "fimenquanto",
    unlocked: false,
    lessons: [
      { id: "l-laco-1", title: "Repetir com enquanto", status: "locked" },
      { id: "l-laco-2", title: "Laço para", status: "locked" },
      { id: "l-laco-3", title: "Contadores e acumuladores", status: "locked" },
      { id: "l-laco-4", title: "Laços dentro de laços", status: "locked" },
    ],
  },
];
