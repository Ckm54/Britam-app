import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Pressable,
  Keyboard,
} from "react-native";
import React from "react";
import FormField from "../components/Forms/FormField";
import { useFormData } from "../hooks/useFormData";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ForgotPasswordScreen = () => {
  const { formValues, handleFormValueChange, setFormValues } = useFormData({
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  return (
    <SafeAreaView>
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
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{ color: "white", fontSize: 18 }}>Reset Password</Text>
        </TouchableOpacity>

        <View style={styles.createAccText}>
          <Text
            style={{ color: "#0077BE" }}
            onPress={() => navigation.navigate("login" as never)}
          >
            Back to login
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
  formContainer: {
    paddingTop: height * 0.2,
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  createAccText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
  },
});

export default ForgotPasswordScreen;
