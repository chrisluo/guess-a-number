import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
      setAvailableDeviceWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            width: availableDeviceWidth * 0.7,
            height: availableDeviceWidth * 0.7,
            borderRadius: (availableDeviceWidth * 0.7) / 2
          }}
        >
          <Image
            fadeDuration={300}
            style={styles.image}
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_1280.jpg"
            // }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            marginVertical: availableDeviceHeight / 60
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              fontSize: availableDeviceHeight < 600 ? 12 : 20
            }}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30
  },
  resultText: {
    textAlign: "center"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
