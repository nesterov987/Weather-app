import { Colors } from "@/constants/Colors";
import { RootState } from "@/store/store";
import { IWeather } from "@/types/weather-types";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useEffect } from "react";
import { getAnimatedImage } from "@/utils/getAnimatedImage";

export const MainInfo = () => {
    const {t}=useTranslation()
  const currentWeather: IWeather[] = useSelector(
    (state: RootState) => state.storeWeather.currentWeather
  );
  const scale=useSharedValue(1)
  useEffect(() => {
    scale.value=withRepeat(
      withTiming(1.3, {
        duration:2000,
        easing:Easing.ease
      }),
      -1,
      true
    )
  }, [])
  const animatedStyle= useAnimatedStyle(() => {
    return{
      transform:[{scale:scale.value}]
    }
  })
  return (
    <View style={style.rootContainer}>
      <View style={style.imgStl}>
        {getAnimatedImage(currentWeather[0].weather[0].icon, animatedStyle)}
      </View>
      <View>
        <Text style={style.txtStl}>
          {Math.round(currentWeather[0].main.temp)}&#8451;
        </Text>
      </View>

      <View>
        <Text style={style.txtStl2}>{t(`${currentWeather[0].weather[0].main}`)}</Text>
      </View>

      <View style={style.tempContainer}>
        <Text style={style.txtStl3}>
          {t('Min')}: {Math.round(currentWeather[0].main.temp_min)}&#8451;
        </Text>
        <Text style={style.txtStl3}>
        {t('Max')}: {Math.round(currentWeather[0].main.temp_max)}&#8451;
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    alignItems: "center"
  },
  imgStl: {
    marginBottom: -30
  },
  txtStl: {
    fontSize: 64,
    lineHeight: 76.38,
    fontWeight: 600,
    color: Colors.common.white,
    paddingLeft: 17,
    marginBottom: -5,
    fontFamily: "Rubik"
  },
  txtStl2: {
    fontFamily: "Rubik",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: 21.48,
    color: Colors.common.white,
    marginTop: 10
  },
  txtStl3: {
    fontFamily: "Rubik",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 21.48,
    color: Colors.common.white,
    marginTop: 3
  },
  tempContainer: {
    flexDirection: "row",
    gap: 16
  }
});
