import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 👈 This disables it globally, the default header
      }}
    />
  );
}
