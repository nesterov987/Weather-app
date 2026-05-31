import { DiagnosticsComponent } from "@/components/DiagnosticsComponent";
import { HeaderWeather } from "@/components/HeaderWeather";
import { MainInfo } from "@/components/MainInfo";
import { NextDayWeather } from "@/components/TomorrowForecastWeather";
import { TodayWeather } from "@/components/TodayWeather";
import { Colors } from "@/constants/Colors";
import { RootState } from "@/store/store";
import { IWeather } from "@/types/weather-types";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function WeatherScreen() {
  const { t } = useTranslation();

  const currentWeather: IWeather[] = useSelector(
    (state: RootState) => state.storeWeather.currentWeather
  );
  console.log("STORE:", currentWeather);

  if (!currentWeather || currentWeather.length === 0) {
    return (
      <View style={[style.rootContainer, style.centerContainer]}>
        <Text style={style.textStyle}>{t("not_search")}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={style.rootContainer}>
      <HeaderWeather />
      <MainInfo />
      <DiagnosticsComponent />
      <TodayWeather />
      <NextDayWeather />
    </ScrollView>
  );
}


const style = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.bg.blueDark,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: "5%",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: Colors.common.white,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Rubik",
  },
});