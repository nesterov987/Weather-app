import { Colors } from "@/constants/Colors";
import { getWeather } from "@/utils/getWeather";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {Picker} from '@react-native-picker/picker';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { useDispatch } from "react-redux";
import { AppLanguageType } from "@/types/data-types";
import { useTranslation } from "react-i18next";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [isFetchData, setIsFetchData] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<AppLanguageType>('en')
  const {t,i18n}=useTranslation()

  useEffect(() => {
      const handleLanguageChange = () => setSelectedLanguage(i18n.language as AppLanguageType);
      i18n.on("languageChanged", handleLanguageChange);
      return () => i18n.off("languageChanged", handleLanguageChange);
    }, []);
  
  const changeLanguage =(lang:AppLanguageType) => {
    setSelectedLanguage(lang)
    i18n.changeLanguage(lang)
  }

  const showWeather = () => {
    if(text.length===0){
      Alert.alert('Error', t('You_must_enter'))
    }
    getWeather(dispatch, text).then((isSuccess) => {
      if (isSuccess) {
        setIsFetchData(true);
      } else {
        console.error("Не удалось получить данные");
      }
    });
    if (isFetchData) {
      router.navigate("/(tabs)/weather");
    }
    setIsFetchData(false);
  };

  return (
    <View style={style.rootContainer}>
      <Text style={style.headerText}>{t('Find_city')}</Text>
      <View style={style.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={t('Enter_city')}
          style={style.textInput}
        />
      </View>
      <TouchableOpacity style={style.buttonContainer} onPress={showWeather}>
        <Text style={style.textButton}>{t('Show_weather')}</Text>
      </TouchableOpacity>
    <View style={style.pickerContainer}>
      <Picker
            selectedValue={selectedLanguage}
            style={style.picker}
            onValueChange={(itemValue, itemIndex) =>  changeLanguage(itemValue)}>
            <Picker.Item label={`🇬🇧 English`} value="en" />
            <Picker.Item label={`🇷🇺 Русский`} value="ru" />
      </Picker>
    </View>
    </View>
  );
}

const style = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.bg.blueDark,
    flex: 1,
    paddingVertical:'5%',
    padding:16
  },
  picker: {
    color: Colors.common.white,
  },
  pickerContainer:{
    borderWidth:1,
    borderRadius:10,
    borderColor:Colors.common.dark,
    overflow:'hidden',
    marginHorizontal:'25%',
    padding:8,
  },
  headerText: {
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 24,
    color: Colors.common.white,
    fontFamily: "Rubik"
  },
  inputContainer: {
    backgroundColor: Colors.common.white,
    marginHorizontal: "15%",
    borderRadius: 12,
    padding: 4
  },
  textInput: {
    fontSize: 18,
    color: Colors.common.dark,
    fontFamily: "Rubik"
  },
  buttonContainer: {
    marginHorizontal: "25%",
    marginVertical: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.common.sandy,
    borderRadius: 8,
    padding: 8
  },
  textButton: {
    fontSize: 16,
    color: Colors.common.dark,
    fontFamily: "Rubik"
  }
});
