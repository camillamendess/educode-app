import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LicaoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-page px-5"
      style={{ paddingTop: insets.top + 8 }}
    >
      <Pressable
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Voltar para a trilha"
        className="h-10 w-10 items-center justify-center"
      >
        <Ionicons name="close" size={28} color="#1C2140" />
      </Pressable>

      <View className="flex-1 items-center justify-center">
        <Text className="font-lexend-bold text-xl text-ink">Lição</Text>
        <Text className="mt-2 font-code text-sm text-ink-soft">{id}</Text>
        <Text className="mt-4 text-center font-lexend text-base text-ink-soft">
          Em desenvolvimento.
        </Text>
      </View>
    </View>
  );
}
