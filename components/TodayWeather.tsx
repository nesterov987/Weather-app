import { Colors } from "@/constants/Colors";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import moment from "moment";
import React, { useState } from "react";
import { TodayWeatherListItem } from "@/ui/TodayWeatherListItem";
import { IWeather, IWeatherResponse } from "@/types/weather-types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslation } from "react-i18next";


export const TodayWeather = () => {
  const {t,i18n}=useTranslation()
  const date = moment();
  const forecastWeather: IWeatherResponse|undefined = useSelector(
    (state: RootState) => state.storeWeather.forecastWeather
  );
  const currentWeather: IWeather[] = useSelector(
      (state: RootState) => state.storeWeather.currentWeather
    );
  if(forecastWeather===undefined){
    return;
  }
  const [timezoneOffset, setTimezoneOffset] = useState(currentWeather[0].timezone);
  const [currentTime, setCurrentTime] = useState(moment.unix(currentWeather[0].dt).utcOffset(timezoneOffset / 60));
  const [todayForecast, setTodayForecast] = useState(forecastWeather.list.filter(item => Number(currentTime.format('D')) === Number(moment.unix(item.dt).utcOffset(timezoneOffset / 60).format('D'))));
  return (
    <View style={style.rootContainer}>
      <View style={style.headerContainer}>
        <Text style={style.headerDay}>{t('Today')}</Text>
        <Text style={style.headerDate}> {t(`${date.format("MMMM")}`)} {date.format("D")}</Text>
      </View>
      <FlatList
        data={todayForecast}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <TodayWeatherListItem item={item.item} />}
        contentContainerStyle={style.listContainer}
      />
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    height: Dimensions.get("window").height / 5,
    marginHorizontal: 20,
    backgroundColor: Colors.bg.blueLight,
    padding: 10,
    borderRadius: 20,
    marginTop: 20
  },
  headerContainer: {
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  headerDay: {
    color: Colors.common.white,
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "Rubik"
  },
  headerDate: {
    color: Colors.common.white,
    fontWeight: 400,
    fontSize: 18,
    fontFamily: "Rubik"
  },
  imageSize: {
    width: 50,
    height: 50
  },
  listContainer: {
    height: "75%"
  }
});