import { Colors } from "@/constants/Colors";
import { getWeather } from "@/utils/getWeather";
import { HeaderHome } from "@/components/HeaderHome";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { AppLanguageType } from "@/types/data-types";
import { useTranslation } from "react-i18next";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] =
    useState<AppLanguageType>("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: AppLanguageType) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const showWeather = () => {
    if (text.length === 0) {
      Alert.alert("Error", t("You_must_enter"));
      return;
    }

    getWeather(dispatch, text).then((isSuccess) => {
      if (isSuccess) {
        router.push("/(tabs)/weather");
      } else {
        Alert.alert("Error", "City not found");
      }
    });
  };

  return (
    <View style={style.rootContainer}>

      <HeaderHome />


    <View style={style.weatherCard}>


      <View style={style.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={t("Enter_city")}
          placeholderTextColor="#484b50"
          style={style.textInput}
        />
      </View>

      <TouchableOpacity style={style.buttonContainer} onPress={showWeather}>
        <Text style={style.textButton}>{t("Show_weather")}</Text>
      </TouchableOpacity>

      <View style={style.pickerContainer}>

        <View style={style.pickerLabel}>
          <Text style={style.pickerText}>{t("Select_language")}</Text>
        </View>

        <Picker
          selectedValue={selectedLanguage}
          style={style.picker}
          onValueChange={(itemValue) =>
            changeLanguage(itemValue as AppLanguageType)
          }
        >
          <Picker.Item label="🇬🇧 English" value="en" />
          <Picker.Item label="🇷🇺 Русский" value="ru" />
        </Picker>
      </View>

    </View>

    </View>
  );
}

const style = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.bg.blueLight,
    flex: 1,
    paddingVertical: "5%",
    padding: 16,
  },
  weatherCard: {
    backgroundColor: Colors.bg.blueCard,
    borderRadius: 20,

    gap: 20,
    marginTop: 20,
    marginHorizontal: "20%",
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
      },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  picker: {
    color: Colors.common.white,

  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#355fc7",
    overflow: "hidden",
    gap: 10,
    padding:5,
    
  },
  pickerLabel: {
    alignItems: 'center',
    color: Colors.common.white,
    marginTop: 8
  },
  pickerText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: Colors.common.white,
    borderRadius: 12,
    padding: 4,
  },
  textInput: {
    fontSize: 18,
    color: Colors.common.dark,
    fontFamily: "Rubik",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.common.sandy,
    borderRadius: 8,
    padding: 8,
  },
  textButton: {
    fontSize: 16,
    color: Colors.common.dark,
    fontFamily: "Rubik",
  },
});