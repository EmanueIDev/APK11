import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#428152",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Página Inicial" }}
      />

      <Stack.Screen
        name="home"
        options={{ title: "Energia Renovável" }}
      />

      <Stack.Screen
        name="energia-cotidiano"
        options={{ title: "Energia no Cotidiano" }}
      />

      <Stack.Screen
        name="sustentabilidade"
        options={{ title: "Sustentabilidade" }}
      />

      <Stack.Screen
        name="details"
        options={{ title: "Detalhes" }}
      />
    </Stack>
  );
}
