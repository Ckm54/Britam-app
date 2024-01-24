import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PlanType } from "../../interfaces/PlanType";
import PlanCard from "./PlanCard";
import { Link } from "@react-navigation/native";
import { appStyles } from "../../styles/mainStyles";

const Plans = () => {
  return (
    <ScrollView contentContainerStyle={styles.plansContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18 }}>Plans for you</Text>
        <Link to={"/allPlans"}>
          <Text style={{ color: "#0077BE", textDecorationColor: "#0077BE" }}>
            View All
          </Text>
        </Link>
      </View>

      <FlatList
        data={insurancePlans}
        renderItem={({ item }) => <PlanCard plan={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default Plans;

const styles = StyleSheet.create({
  plansContainer: {
    marginVertical: 8,
  },
});

export const insurancePlans: PlanType[] = [
  {
    id: 1,
    title: "Unit Trust Funds",
    description:
      "Is a professionally managed investment fund in which investors’ contributions are pooled together to purchase financial securities",
    imageURL:
      "https://images.unsplash.com/photo-1615651885088-3ff35a7e0b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Unit Trust 02",
    description:
      "Is a professionally managed investment fund in which investors’ contributions are pooled together to purchase financial securities",
    imageURL:
      "https://images.unsplash.com/photo-1615651885088-3ff35a7e0b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Unit Trust 03",
    description:
      "Is a professionally managed investment fund in which investors’ contributions are pooled together to purchase financial securities",
    imageURL:
      "https://images.unsplash.com/photo-1615651885088-3ff35a7e0b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Unit Trust 04",
    description:
      "Is a professionally managed investment fund in which investors’ contributions are pooled together to purchase financial securities",
    imageURL:
      "https://images.unsplash.com/photo-1615651885088-3ff35a7e0b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];
