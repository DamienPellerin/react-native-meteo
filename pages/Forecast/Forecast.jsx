import { Container } from "../../components/Container/Container";
import { Txt } from "../../components/Txt/Txt";
import { TouchableOpacity, View } from "react-native";
import { s } from "./Forecast.style";
import { useNavigation, useRoute } from "@react-navigation/native";

export function Forecast({}) {
  const { params } = useRoute();
  const { nav } = useNavigation();

  const backButton = (
    <TouchableOpacity onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View>
        <Txt style={s.header_texts}></Txt>
        <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );
  return <Container>{backButton}</Container>;
}
