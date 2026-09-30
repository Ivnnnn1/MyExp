import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // index.tsx as the standard welcome screen
    // The (tabs) layout contains the main navigation routes
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: "WELCOME" }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} // Hides the root header so the Tabs header can take over
      />
    </Stack>
  );
}