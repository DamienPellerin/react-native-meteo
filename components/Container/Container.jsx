import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/app-meteo.png";
import { Forecast } from "../../pages/Forecast/Forecast";
import { s } from "./Container.style";

export function Container({ children }) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}