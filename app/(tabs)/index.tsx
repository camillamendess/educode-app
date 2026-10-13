import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { mockModules, mockUser } from "@/features/trail/mock";
import { ModuleBlock } from "@/features/trail/module-block";

export default function TrilhaScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleStartLesson = (lessonId: string) => {
    router.push(`/licao/${lessonId}`);
  };

  return (
    <View className="flex-1 bg-page" style={{ paddingTop: insets.top }}>
      {/* Topo: saudação + ofensiva + XP */}
      <View className="flex-row items-center border-b border-line px-5 pb-4 pt-2">
        <Text className="flex-1 font-lexend-bold text-2xl text-ink">
          Olá, {mockUser.name}
        </Text>

        <View
          className="mr-2 flex-row items-center rounded-full bg-white px-3 py-1.5"
          accessible
          accessibilityLabel={`Ofensiva de ${mockUser.streak} dias`}
        >
          <Ionicons name="flame" size={18} color="#F26B1D" />
          <Text className="ml-1 font-lexend-semi text-sm text-ink">
            {mockUser.streak}
          </Text>
        </View>

        <View
          className="flex-row items-center rounded-full bg-white px-3 py-1.5"
          accessible
          accessibilityLabel={`${mockUser.xp} pontos de experiência`}
        >
          <Ionicons name="star" size={16} color="#E8922E" />
          <Text className="ml-1 font-lexend-semi text-sm text-ink">
            {mockUser.xp} XP
          </Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-10 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="mb-5 font-lexend text-base text-ink-soft">
          Exemplo de tela - Dados mockados.
        </Text>

        {mockModules.map((module, index) => (
          <ModuleBlock
            key={module.id}
            module={module}
            previousTitle={mockModules[index - 1]?.title}
            onStartLesson={handleStartLesson}
          />
        ))}
      </ScrollView>
    </View>
  );
}
