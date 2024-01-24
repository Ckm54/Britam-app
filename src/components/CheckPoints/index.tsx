import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { CheckPointsType } from "../../interfaces/CheckPoints";
import { appStyles } from "../../styles/mainStyles";

interface CheckPointsProps {
  data: CheckPointsType;
}

const CheckPoints = ({ data }: CheckPointsProps) => {
  return (
    <View style={appStyles.checkpointsContainer}>
      <Icon
        name={data.isChecked ? "check" : "x"}
        color={data.isChecked ? "#00C566" : "#FF403B"}
        size={20}
      />
      <Text style={appStyles.checkpointText}>{data.title}</Text>
    </View>
  );
};

export default CheckPoints;
