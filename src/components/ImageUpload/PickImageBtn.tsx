import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { appStyles } from "../../styles/mainStyles";
import Icon from "react-native-vector-icons/Feather";

interface PickImageBtnProps {
  handlePickImage: () => void;
  loading: boolean;
  btnText: string;
  iconName: string;
}

const PickImageBtn = ({
  handlePickImage,
  loading,
  btnText,
  iconName,
}: PickImageBtnProps) => {
  return (
    <TouchableOpacity
      onPress={handlePickImage}
      style={[appStyles.imgContainer, styles.btnUpload]}
    >
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator color={"#fff"} animating size={"large"} />
        </View>
      ) : (
        <View style={styles.container}>
          <Icon name={iconName} color={"white"} size={24} />
          <Text style={styles.btnText}>{btnText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PickImageBtn;

const styles = StyleSheet.create({
  btnUpload: {
    borderColor: "gray",
    backgroundColor: "#333333",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  btnText: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 16,
  },
});
