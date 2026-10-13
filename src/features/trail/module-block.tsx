import { Module } from "@/types/trail";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { LessonRow } from "./lesson-row";
import { modulePalette } from "./palette";

interface Props {
  module: Module;
  /** Título do módulo anterior, usado na mensagem de bloqueio (RN-001) */
  previousTitle?: string;
  onStartLesson: (lessonId: string) => void;
}

/**
 * Módulo desenhado como um bloco "C" de programação visual:
 * cabeçalho com a palavra-chave de abertura, lateral colorida
 * envolvendo as lições e rodapé com a palavra-chave de fechamento.
 */
export function ModuleBlock({ module, previousTitle, onStartLesson }: Props) {
  const palette = modulePalette[module.unlocked ? module.kind : "bloqueado"];
  const doneCount = module.lessons.filter((l) => l.status === "done").length;
  const total = module.lessons.length;

  return (
    <View className="mb-8">
      {/* Cabeçalho */}
      <View
        className={`flex-row items-center rounded-t-2xl rounded-br-2xl px-4 py-3 ${palette.bar}`}
      >
        <View className="rounded-md bg-white/25 px-2 py-0.5">
          <Text className="font-code text-sm text-white">
            {module.openKeyword}
          </Text>
        </View>
        <Text className="ml-3 flex-1 font-lexend-bold text-lg text-white">
          {module.title}
        </Text>
        {module.unlocked ? (
          <Text className="font-lexend-medium text-sm text-white">
            {doneCount}/{total}
          </Text>
        ) : (
          <Ionicons name="lock-closed" size={18} color="#FFFFFF" />
        )}
      </View>

      {/* Corpo: lateral colorida + conteúdo */}
      <View className="flex-row">
        <View className={`w-4 ${palette.bar}`} />
        <View className={`flex-1 px-3 py-2 ${palette.tint}`}>
          {module.unlocked ? (
            module.lessons.map((lesson, index) => (
              <LessonRow
                key={lesson.id}
                lesson={lesson}
                index={index}
                palette={palette}
                onStart={onStartLesson}
              />
            ))
          ) : (
            <View className="py-3">
              <Text className="font-lexend text-[15px] leading-6 text-ink-soft">
                {previousTitle
                  ? `Conclua ${previousTitle} com 70% de acerto para liberar.`
                  : "Módulo bloqueado."}
              </Text>
              <Text className="mt-1 font-lexend text-sm text-ink-faint">
                {total} lições
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Rodapé */}
      <View
        className={`w-40 justify-center rounded-b-2xl rounded-tr-2xl px-4 py-2 ${palette.bar}`}
      >
        <Text className="font-code text-sm text-white">
          {module.closeKeyword}
        </Text>
      </View>
    </View>
  );
}
