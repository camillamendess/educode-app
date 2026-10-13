/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        page: "#F3F5FA",
        ink: {
          DEFAULT: "#1C2140",
          soft: "#5B6180",
          faint: "#A3A8BF",
        },
        line: "#DDE1EC",
        // Uma cor por tipo de bloco de código (mesma lógica do Scratch)
        variavel: { DEFAULT: "#E8922E", tint: "#FDF1E3" },
        condicional: { DEFAULT: "#3A6FE0", tint: "#E7EEFC" },
        laco: { DEFAULT: "#B4428C", tint: "#F8E8F2" },
        bloqueado: { DEFAULT: "#C5C9D8", tint: "#ECEEF4" },
        // Reservadas para feedback de resposta e gamificação
        ok: "#1F9D63",
        err: "#D64545",
        streak: "#F26B1D",
      },
      fontFamily: {
        lexend: ["Lexend_400Regular"],
        "lexend-medium": ["Lexend_500Medium"],
        "lexend-semi": ["Lexend_600SemiBold"],
        "lexend-bold": ["Lexend_700Bold"],
        code: ["JetBrainsMono_500Medium"],
      },
    },
  },
};
