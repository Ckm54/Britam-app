import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { insurancePlans } from ".";
import PlanCard from "./PlanCard";

const BusinessPlans = () => {
  return (
    <FlatList
      data={insurancePlans}
      renderItem={({ item }) => <PlanCard plan={item} isDetail />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default BusinessPlans;

const styles = StyleSheet.create({});
