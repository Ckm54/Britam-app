import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { insurancePlans } from ".";
import PlanCard from "./PlanCard";

const PersonalPlans = () => {
  return (
    <FlatList
      data={insurancePlans}
      renderItem={({ item }) => <PlanCard plan={item} isDetail />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PersonalPlans;

const styles = StyleSheet.create({});
