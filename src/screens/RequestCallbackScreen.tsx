import {
  Dimensions,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FormField from "../components/Forms/FormField";
import { useFormData } from "../hooks/useFormData";
import { appStyles } from "../styles/mainStyles";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const RequestCallbackScreen = () => {
  const navigation = useNavigation();
  const { formValues, handleFormValueChange, setFormValues } = useFormData({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  return (
    <ScrollView>
      <Pressable
        style={styles.formContainer}
        onPress={() => Keyboard.dismiss()}
      >
        <FormField
          label="Name"
          placeholder="Enter your full name"
          handleValueChange={handleFormValueChange}
          formKey="name"
        />
        <FormField
          label="Email address"
          placeholder="Enter your email address"
          handleValueChange={handleFormValueChange}
          formKey="email"
          keyboardType="email-address"
        />
        <FormField
          label="Phone number"
          placeholder="Enter your phone number"
          handleValueChange={handleFormValueChange}
          formKey="phoneNumber"
          keyboardType="phone-pad"
        />
        <FormField
          label="Comment"
          placeholder="Write something"
          handleValueChange={handleFormValueChange}
          formKey="comment"
          multiline
        />
      </Pressable>
      <TouchableOpacity
        style={[
          appStyles.actionBtn,
          { backgroundColor: "#D73444", marginHorizontal: 16 },
        ]}
        onPress={() => navigation.navigate("support" as never)}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RequestCallbackScreen;

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginTop: 32,
  },
});
