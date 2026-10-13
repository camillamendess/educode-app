export type ModuleKind = "variavel" | "condicional" | "laco";

export type LessonStatus = "done" | "current" | "locked";

export interface Lesson {
  id: string;
  title: string;
  status: LessonStatus;
  /** Melhor percentual de acerto, só existe em lições concluídas */
  score?: number;
}

export interface Module {
  id: string;
  kind: ModuleKind;
  title: string;
  /** Palavra-chave em pseudocódigo que abre o bloco (ex.: "se") */
  openKeyword: string;
  /** Palavra-chave que fecha o bloco (ex.: "fimse") */
  closeKeyword: string;
  unlocked: boolean;
  lessons: Lesson[];
}

export interface UserSummary {
  name: string;
  xp: number;
  streak: number;
}
