import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import BusinessPlans from "../components/Plans/BusinessPlans";
import PersonalPlans from "../components/Plans/PersonalPlans";
import SearchInput from "../components/SearchInput";
import { appStyles } from "../styles/mainStyles";

const AllPlansScreen = () => {
  const renderScene = SceneMap({
    personal: PersonalPlans,
    business: BusinessPlans,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "personal", title: "Personal" },
    { key: "business", title: "Business" },
  ]);

  const [searchInput, setSearchInput] = React.useState("");
  return (
    <SafeAreaView style={appStyles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 32,
                marginBottom: 8,
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 24 }}>
                {props.navigationState.index === 0
                  ? "Insurance"
                  : "Investment and Saving"}
              </Text>
              <FontAwesome name="bell" size={24} />
            </View>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "white" }}
              tabStyle={{
                backgroundColor: "#0077BE",
                minHeight: 30,
              }} // here
              renderLabel={({ route, focused, color }) => (
                <Text style={{ color, margin: 8, fontSize: 16 }}>
                  {route.title}
                </Text>
              )}
              style={{
                backgroundColor: "red",
                borderRadius: 10,
                overflow: "hidden",
              }}
            />
            <SearchInput
              searchValue={searchInput}
              setSearchValue={setSearchInput}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default AllPlansScreen;

const styles = StyleSheet.create({});
