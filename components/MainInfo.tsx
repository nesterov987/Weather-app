import { Colors } from "@/constants/Colors";
import { RootState } from "@/store/store";
import { IWeather } from "@/types/weather-types";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text, Image } from "react-native";
import { useSelector } from "react-redux";

export const MainInfo = () => {
  const { t } = useTranslation();

  const currentWeather: IWeather[] = useSelector(
    (state: RootState) => state.storeWeather.currentWeather
  );

  if (!currentWeather || currentWeather.length === 0) return null;

  const weather = currentWeather[0];

  return (
    <View style={style.rootContainer}>
      <View style={style.imgStl}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <Text style={style.txtStl}>
        {Math.round(weather.main.temp)}&#8451;
      </Text>

      <Text style={style.txtStl2}>
        {t(`${weather.weather[0].main}`)}
      </Text>

      <View style={style.tempContainer}>
        <Text style={style.txtStl3}>
          {t("Min")}: {Math.round(weather.main.temp_min)}&#8451;
        </Text>
        <Text style={style.txtStl3}>
          {t("Max")}: {Math.round(weather.main.temp_max)}&#8451;
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  imgStl: {
    marginBottom: -10,
  },
  txtStl: {
    fontSize: 64,
    lineHeight: 76,
    fontWeight: "600",
    color: Colors.common.white,
    marginBottom: -5,
    fontFamily: "Rubik",
  },
  txtStl2: {
    fontFamily: "Rubik",
    fontWeight: "300",
    fontSize: 18,
    color: Colors.common.white,
    marginTop: 10,
  },
  txtStl3: {
    fontFamily: "Rubik",
    fontWeight: "300",
    fontSize: 16,
    color: Colors.common.white,
    marginTop: 3,
  },
  tempContainer: {
    flexDirection: "row",
    gap: 16,
  },
});