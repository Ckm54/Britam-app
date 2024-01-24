import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const SupportScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ height: height, paddingHorizontal: 16 }}>
      <FlatList
        numColumns={2}
        data={supportLinks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate(item.linkTo as never)}
          >
            <Icon name={item.iconName} size={32} color={"#0077BE"} />
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    // height: height,
    alignItems: "center",
    marginHorizontal: "1%",
    marginTop: "4%",
    justifyContent: "center",
    borderColor: "#0077BE",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 40,
  },
});

const supportLinks = [
  {
    title: "Request a callback",
    iconName: "phone-call",
    linkTo: "requestCallback",
  },
  {
    title: "Chat",
    iconName: "message-circle",
    linkTo: "chat",
  },
  {
    title: "Locate us near you",
    iconName: "search",
    linkTo: "search",
  },
];
