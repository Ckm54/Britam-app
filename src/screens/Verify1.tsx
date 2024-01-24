import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Dropdown from "../components/Dropdown";
import { FormSelectData } from "../interfaces/FormValues";
import SelectBtn from "../components/SelectButtons";
import { DocumentProps } from "../interfaces/DocumentProps";
import SelectButtons from "../components/SelectButtons";
import { CheckBox } from "react-native-elements";
import { appStyles } from "../styles/mainStyles";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

const documents: DocumentProps[] = [
  {
    name: "Identity Card",
    icon: <AntDesign name="idcard" color={"gray"} size={24} />,
  },
  {
    name: "Passport",
    icon: <MaterialCommunityIcons name="passport" color="gray" size={24} />,
  },
  {
    name: "Driver's license",
    icon: <FontAwesome name="drivers-license" color={"gray"} size={24} />,
  },
];

const { height } = Dimensions.get("window");

const Verify1 = () => {
  const [countrySelected, setCountrySelected] =
    React.useState<FormSelectData>();
  const [optionSelected, setOptionSelected] = React.useState(documents[0].name);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const data: Array<{ label: string; value: string }> = [
    { label: "Kenya", value: "Ke" },
    { label: "Uganda", value: "Ug" },
    { label: "Tanzania", value: "Tz" },
    { label: "Ethiopia", value: "Eth" },
    { label: "Burundi", value: "Brn" },
  ];
  return (
    <SafeAreaView style={{ height, marginHorizontal: 16 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.labelText}>Select country of Residence</Text>
          <Dropdown
            label="Select country"
            data={data}
            onSelect={setCountrySelected}
          />
          <Text style={[styles.labelText, { marginBottom: 28 }]}>
            Select a valid Government-issued document
          </Text>
          <SelectButtons
            data={documents}
            onSelect={setOptionSelected}
            optionSelected={optionSelected}
          />
        </View>

        <View style={{ marginTop: height / 5 }}>
          <View style={appStyles.termsContainer}>
            <CheckBox
              checked={isChecked}
              onPress={handleCheckboxChange}
              containerStyle={appStyles.checkboxContainer}
            />
            <Text style={{ flex: 1, flexWrap: "wrap" }}>
              This information is used for identity verification only, and will
              be kept secure by CrypCoin
            </Text>
          </View>

          <TouchableOpacity
            disabled={!isChecked}
            style={[
              appStyles.actionBtn,
              { marginTop: 20, opacity: !isChecked ? 0.5 : 1 },
            ]}
            onPress={() => navigation.navigate("documentUpload" as never)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verify1;

const styles = StyleSheet.create({
  labelText: {
    fontWeight: "600",
    marginBottom: 16,
    marginTop: 20,
  },
});
