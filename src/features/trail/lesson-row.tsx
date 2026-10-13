import { Lesson } from "@/types/trail";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { ModulePalette } from "./palette";

interface Props {
  lesson: Lesson;
  index: number;
  palette: ModulePalette;
  onStart: (lessonId: string) => void;
}

export function LessonRow({ lesson, index, palette, onStart }: Props) {
  if (lesson.status === "current") {
    return (
      <View
        className={`my-1 rounded-xl border-2 bg-white p-3 ${palette.border}`}
      >
        <View className="flex-row items-center">
          <View
            className={`h-8 w-8 items-center justify-center rounded-full ${palette.bar}`}
          >
            <Text className="font-code text-sm text-white">{index + 1}</Text>
          </View>
          <Text className="ml-3 flex-1 font-lexend-semi text-base text-ink">
            {lesson.title}
          </Text>
        </View>
        <Pressable
          onPress={() => onStart(lesson.id)}
          accessibilityRole="button"
          accessibilityLabel={`Continuar lição ${lesson.title}`}
          className={`mt-3 items-center rounded-lg py-3 active:opacity-80 ${palette.bar}`}
        >
          <Text className="font-lexend-bold text-base text-white">
            Continuar
          </Text>
        </Pressable>
      </View>
    );
  }

  const done = lesson.status === "done";

  return (
    <View
      className="flex-row items-center py-2.5"
      accessible
      accessibilityLabel={
        done
          ? `${lesson.title}, concluída com ${lesson.score}% de acerto`
          : `${lesson.title}, bloqueada`
      }
    >
      {done ? (
        <Ionicons name="checkmark-circle" size={32} color={palette.hex} />
      ) : (
        <View className="h-8 w-8 items-center justify-center rounded-full bg-bloqueado-tint">
          <Ionicons name="lock-closed" size={14} color="#A3A8BF" />
        </View>
      )}
      <Text
        className={`ml-3 flex-1 font-lexend text-[15px] ${done ? "text-ink" : "text-ink-faint"}`}
      >
        {lesson.title}
      </Text>
      {done && lesson.score !== undefined && (
        <Text className="font-code text-sm text-ink-soft">{lesson.score}%</Text>
      )}
    </View>
  );
}
