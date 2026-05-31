import { Text, View, StyleSheet } from "react-native"
import { Image } from "react-native";
import { useTranslation } from "react-i18next";
import { Colors } from "@/constants/Colors";

export const HeaderHome = () => {
    const {t,i18n}=useTranslation()
    return (
        <View style={style.headerView} >
            <Image source={require("../assets/photos/02d.png")} />

            <View style={style.headLine}>
                <Text style={style.headerTitle}> {t('Weather_App')} </Text>
                <Text style={style.headerText}>{t("Find_city")}</Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    headLine: {
        gap:20,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 700,

    },
    headerView: {
        alignItems: 'center',
        marginTop: 20
    },
    headerText: {
        textAlign: "center",
        fontSize: 20,
        color: Colors.common.white,
        fontFamily: "Rubik",
    },
});