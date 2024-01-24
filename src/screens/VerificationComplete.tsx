import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { appStyles } from "../styles/mainStyles";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const VerificationComplete = () => {
  const navigation = useNavigation();

  return (
    <View style={[appStyles.container, styles.verifiedContainer]}>
      <Image source={require("../../assets/done.png")} style={styles.image} />
      <Text style={styles.txtVerified}>
        You have been verified and your information recorded successfully. Let's
        make some transactions
      </Text>

      <TouchableOpacity
        style={[appStyles.actionBtn, { marginTop: 40 }]}
        onPress={() => navigation.navigate("home" as never)}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationComplete;

const styles = StyleSheet.create({
  verifiedContainer: {
    marginTop: height / 6,
  },
  image: {
    height: 230,
    width: 230,
    alignSelf: "center",
    marginBottom: 24,
  },
  txtVerified: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});
