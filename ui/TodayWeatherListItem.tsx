import { TodayWeatherDataType } from "@/types/data-types";
import moment from "moment";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { WeatherEntry } from "@/types/weather-types";
import { getImage } from "@/utils/getImage";
import { getTime } from "@/utils/getTime";

export const TodayWeatherListItem = ({
  item
}: {
  item: WeatherEntry;
}) => {
  return (
    <View style={style.rootContainer}>
      <Text style={style.txtStyle}>{Math.round(item.main.temp)}&#8451;</Text>
        {getImage(item.weather[0].icon,style.imageContainer)}
      <Text style={style.txtStyle}>{getTime(item.dt_txt)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10
  },
  txtStyle: {
    color: Colors.common.white,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "Rubik"
  },
  imageContainer:{
    width:50,
    height:50,

  }
});
