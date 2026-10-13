// Classes escritas por extenso para o Tailwind encontrar no build.
// Nunca montar nomes de classe com template string (ex.: `bg-${kind}`).

import { ModuleKind } from "@/types/trail";

export interface ModulePalette {
  bar: string;
  tint: string;
  text: string;
  border: string;
  hex: string;
}

export const modulePalette: Record<ModuleKind | "bloqueado", ModulePalette> = {
  variavel: {
    bar: "bg-variavel",
    tint: "bg-variavel-tint",
    text: "text-variavel",
    border: "border-variavel",
    hex: "#E8922E",
  },
  condicional: {
    bar: "bg-condicional",
    tint: "bg-condicional-tint",
    text: "text-condicional",
    border: "border-condicional",
    hex: "#3A6FE0",
  },
  laco: {
    bar: "bg-laco",
    tint: "bg-laco-tint",
    text: "text-laco",
    border: "border-laco",
    hex: "#B4428C",
  },
  bloqueado: {
    bar: "bg-bloqueado",
    tint: "bg-bloqueado-tint",
    text: "text-ink-faint",
    border: "border-bloqueado",
    hex: "#C5C9D8",
  },
};
