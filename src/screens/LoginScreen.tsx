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
import FormField from "../components/Forms/FormField";
import { useFormData } from "../hooks/useFormData";
import { appStyles } from "../styles/mainStyles";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const { formValues, handleFormValueChange, setFormValues } = useFormData({
    email: "",
    password: "",
  });

  const navigation = useNavigation();

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
        Log In
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
        <Text
          style={{ color: "#0077BE", marginTop: 8 }}
          onPress={() => navigation.navigate("forgotpass" as never)}
        >
          Forgot password?
        </Text>
        <TouchableOpacity
          style={appStyles.actionBtn}
          onPress={() => navigation.navigate("otp" as never)}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.createAccText}>
          <Text>New to MyBritam? </Text>
          <Text
            style={{ color: "#0077BE" }}
            onPress={() => navigation.navigate("signup" as never)}
          >
            Create an account
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default LoginScreen;
