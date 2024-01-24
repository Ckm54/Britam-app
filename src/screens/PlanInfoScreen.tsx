import { RouteProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PlanType } from "../interfaces/PlanType";
import Icon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");

type RootStackParamList = {
  Details: { planId: number; plan: PlanType };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type Props = {
  route?: DetailsScreenRouteProp;
};

const PlanInfoScreen = ({ route }: Props) => {
  const { planId, plan } = route!.params;
  const navigation = useNavigation();

  return (
    <View style={{ position: "relative" }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: plan.imageURL }} style={styles.imageCover} />
      </View>
      <View style={styles.modal}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.typeContent}>
              {"Investment Type".toLocaleUpperCase()}
            </Text>
            <Text style={styles.title}>{plan.title}</Text>
          </View>

          <View>
            <Text style={styles.description}>{plan.description}</Text>
          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>
          <Text style={{ fontWeight: "bold" }}>
            Download or upload the application form below
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#D73444" }]}
              onPress={() => {}}
            >
              <Icon name="download" color={"white"} size={24} />
              <Text style={{ color: "white", fontSize: 18 }}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#0077BE" }]}
              onPress={() => navigation.navigate("formUpload" as never)}
            >
              <Icon name="upload" color={"white"} size={24} />
              <Text style={{ color: "white", fontSize: 18 }}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlanInfoScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: width,
    height: height / 2,
    position: "absolute",
  },
  imageCover: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  modal: {
    top: height / 2 - 60,
    position: "relative",
    height: height / 2 + 60,
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  titleContainer: {
    marginVertical: 5,
  },
  typeContent: {
    color: "#0077BE",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    lineHeight: 24,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 24,
    marginBottom: 32,
    marginTop: 16,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
