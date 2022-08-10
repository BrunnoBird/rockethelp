import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components/Loading/Loading";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent //faz com que a minha status bar passe por cima do body
      />

      { fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
  );
}
