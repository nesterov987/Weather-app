import { Colors } from "@/constants/Colors";
import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { IWeather } from "@/types/weather-types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const DiagnosticsComponent = () => {
  const currentWeather: IWeather[] = useSelector(
    (state: RootState) => state.storeWeather.currentWeather
  );
  return (
    <View style={style.divStyle}>
      <View style={style.commonBox}>
        <Ionicons name="cloud" size={20} color="white" />
        <Text style={style.secTxt}>{currentWeather[0].clouds.all}%</Text>
      </View>

      <View style={style.commonBox}>
        <Entypo name="water" size={20} color="white" />
        <Text style={style.secTxt}>{currentWeather[0].main.humidity}%</Text>
      </View>

      <View style={style.commonBox}>
        <Feather name="align-center" size={20} color="white" />
        <Text style={style.secTxt}>{currentWeather[0].main.pressure} hPa</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  divStyle: {
    backgroundColor: Colors.bg.blueLight,
    height: Dimensions.get("window").height / 23,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    padding: 10
  },
  commonBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "33%",
    justifyContent: "center"
  },
  secTxt: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 16.71,
    color: Colors.common.white,
    marginLeft: 5,
    fontFamily: "Rubik"
  }
});
