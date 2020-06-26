import React from "react";
import { View, StyleSheet, StatusBar, Dimensions, Image, Text,ScrollView } from "react-native";
import {format} from 'date-fns';
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import{Button} from "../components/Button";
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },

  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",

  },

    textHeader: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",

  },
  content: {

    paddingTop: screen.height * 0.2,
  }

});

export default () => {
    const baseCurrency = "USD";
    const quoteCurrency= "GBP";
    const conversionRate= 0.8345;
    const date= new Date;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>
          <ConversionInput
            text="USD"
            value="123"
            onButtonPress={() => alert("todo!")}
            keyboardType="numeric"
            onChangeText={(text) => console.log("text", text)}
          />
          <ConversionInput
            text="GBP"
            value="123"
            editable={false}
            onButtonPress={() => alert("todo!")}
          />

          <Text
            style={styles.text}
          >{`${baseCurrency} = ${conversionRate}${quoteCurrency} as of ${format(
            new Date(date),
            "MMM do yyyy"
          )}`}</Text>

          <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
          <View style={{height: screen.height}}/>
        </View>
      </ScrollView>
    </View>
  );
};
