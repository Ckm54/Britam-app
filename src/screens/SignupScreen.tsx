import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-elements";
import FormField from "../components/Forms/FormField";
import { useFormData } from "../hooks/useFormData";

const { width, height } = Dimensions.get("window");

const SignupScreen = () => {
  const { formValues, handleFormValueChange, setFormValues } = useFormData({
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        Sign Up
      </Text>
      <Pressable
        style={styles.formContainer}
        onPress={() => Keyboard.dismiss()}
      >
        <FormField
          label="Email Address"
          placeholder="Enter email address"
          handleValueChange={handleFormValueChange}
          formKey="email"
          keyboardType="email-address"
        />
        <FormField
          label="Password"
          secureTextEntry
          placeholder="Enter password"
          handleValueChange={handleFormValueChange}
          formKey="password"
        />
        <View style={styles.termsContainer}>
          <CheckBox
            checked={isChecked}
            onPress={handleCheckboxChange}
            containerStyle={styles.checkboxContainer}
          />
          <View style={{ flexDirection: "row" }}>
            <Text>Accept </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>terms of use</Text>
            </TouchableOpacity>
            <Text> & </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>privacy policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.btnLogin, !isChecked && styles.btnLoginDisabled]}
          disabled={!isChecked}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.createAccText}>
          <Text>Already have an account? </Text>
          <Text
            style={{ color: "#0077BE" }}
            onPress={() => navigation.navigate("login" as never)}
          >
            Login
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: "#0077BE",
    height: 50,
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnLoginDisabled: {
    opacity: 0.5,
  },
  formContainer: {
    paddingTop: height * 0.2,
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  createAccText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 120,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkboxContainer: {
    backgroundColor: "transparent", // Set the background color to transparent
    borderWidth: 0, // Remove the border
    padding: 0, // Customize padding if needed
    marginLeft: 0, // Customize margin if needed
  },
  linkText: {
    color: "#2F80ED",
  },
});

export default SignupScreen;
