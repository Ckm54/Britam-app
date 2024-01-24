import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PlanType } from "../../interfaces/PlanType";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
interface PlanCardProps {
  plan: PlanType;
  isDetail?: boolean;
}

const PlanCard = ({ plan, isDetail }: PlanCardProps) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.card,
        {
          width: isDetail ? Dimensions.get("screen").width - 32 : 220,
          marginRight: isDetail ? 0 : 8,
          backgroundColor: isDetail ? "white" : "#F4B63C",
          borderWidth: isDetail ? 1 : 0,
        },
      ]}
    >
      <Text style={styles.title}>{plan.title}</Text>
      <Text style={styles.description}>{plan.description}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("planInfo", { itemId: plan.id, plan })
        }
      >
        <Text style={styles.title}>View Info</Text>
        <Icon name="arrow-right" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 24,
  },
  title: {
    fontWeight: "bold",
    color: "#0077BE",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 8,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 8,
    marginTop: 16,
  },
});
