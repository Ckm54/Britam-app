import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ActivePlanCard from "../components/ActivePlanCard";
import Plans from "../components/Plans";
import SearchInput from "../components/SearchInput";
import { appStyles } from "../styles/mainStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Tabs from "../navigation/Tabs";

const HomeScreen = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  return (
    <SafeAreaView style={appStyles.container}>
      <View style={styles.topView}>
        <View>
          <Text style={{ fontWeight: "500", fontSize: 24 }}>John 👋</Text>
          <Text>
            {new Date().getHours() < 12
              ? "Good Morning"
              : new Date().getHours() < 16
              ? "Good Afternoon"
              : "Good Evening"}
          </Text>
        </View>
        <Icon name="bell" size={24} />
      </View>
      {/* <Pressable onPress={() => Keyboard.dismiss()}> */}
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActivePlanCard />
        <Plans />
        {/* </Pressable> */}
      </ScrollView>
      {/* <Tabs /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
