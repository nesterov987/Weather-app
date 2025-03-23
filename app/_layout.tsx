import store from "@/store/store";
import i18n, { initLanguage } from "@/utils/initLanguage";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import "react-native-reanimated";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Rubik: require("../assets/fonts/Rubik-VariableFont_wght.ttf")
  });

  useEffect(() => {
    const prepare = async () => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
      await initLanguage()
    };
    prepare();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n} >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </I18nextProvider>
    </Provider>
  );
}
