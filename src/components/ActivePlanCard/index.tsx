import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PieChart from "react-native-pie-chart";

const ActivePlanCard = () => {
  const widthAndHeight = 150;
  const series = [243, 321, 203, 237];
  const sliceColor = ["#9F43CC", "#F2994A", "#2F80ED", "#219653"];

  return (
    <View>
      <Text style={{ fontWeight: "600", fontSize: 18 }}>Your active plan</Text>
      <View style={styles.detailsContainer}>
        <View style={[styles.chartContainer, { flex: 1 }]}>
          <PieChart
            widthAndHeight={widthAndHeight}
            // style={{ position: "relative" }}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.55}
            coverFill={"#FFF"}
          />
          <View style={styles.chartTextContainer}>
            <Text style={styles.chartText}>Ksh 12,300</Text>
          </View>
        </View>
        <View style={{ flex: 1, gap: 4 }}>
          <View style={styles.rightContent}>
            <Image source={require("../../../assets/home-icons/pension.png")} />
            <Text style={styles.planText}>Savings</Text>
          </View>
          <View style={styles.rightContent}>
            <Image source={require("../../../assets/home-icons/stocks.png")} />
            <Text style={styles.planText}>Market funds</Text>
          </View>
          <View style={styles.rightContent}>
            <Image source={require("../../../assets/home-icons/diamond.png")} />
            <Text style={styles.planText}>Pensions</Text>
          </View>
          <View style={styles.rightContent}>
            <Image source={require("../../../assets/home-icons/crypto.png")} />
            <Text style={styles.planText}>Assets</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActivePlanCard;

const styles = StyleSheet.create({
  chartContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9F43CC",
    borderStyle: "dashed",
    borderRadius: 10,
    marginVertical: 8,
    gap: 16,
  },
  chartTextContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  chartText: {
    fontWeight: "500",
  },
  planText: {
    fontWeight: "500",
    fontSize: 16,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
