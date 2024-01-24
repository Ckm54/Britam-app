import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  AllPlansScreen,
  DocumentUpload,
  ForgotPasswordScreen,
  FormUpload,
  HomeScreen,
  LoginScreen,
  OTPScreen,
  OnboardingScreen,
  PlanInfoScreen,
  PotraitUpload,
  RequestCallbackScreen,
  SignupScreen,
  SupportScreen,
  VerificationComplete,
  Verify1,
} from "./src/screens";
import Tabs from "./src/navigation/Tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState<boolean | null>(
    null
  );

  React.useEffect(() => {
    const getIsFirstLaunch = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData === null) {
        setIsFirstLaunch(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        ///// Todo:: Update this to false to display onboarding only once
        setIsFirstLaunch(false);
      }
    };

    getIsFirstLaunch();
  }, []);
  return (
    isFirstLaunch !== null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isFirstLaunch && (
            <Stack.Screen
              name="onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgotpass"
            component={ForgotPasswordScreen}
            options={{ title: "Reset Password" }}
          />
          <Stack.Screen
            name="otp"
            component={OTPScreen}
            options={{ title: "Verification" }}
          />
          <Stack.Screen
            name="verify1"
            component={Verify1}
            options={{ title: "Verify Account" }}
          />
          <Stack.Screen
            name="documentUpload"
            component={DocumentUpload}
            options={{ title: "Verify Account" }}
          />
          <Stack.Screen
            name="potraitUpload"
            component={PotraitUpload}
            options={{ title: "Verify Account" }}
          />
          <Stack.Screen
            name="verificationComplete"
            component={VerificationComplete}
            options={{ title: "All Done" }}
          />
          <Stack.Screen
            name="home"
            component={Tabs}
            options={{
              headerShown: false,
              // todo:: Uncomment to disable navigation back to the verification pages
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="allPlans"
            component={AllPlansScreen}
            options={{ headerBackVisible: true, headerShown: false }}
          />
          <Stack.Screen
            name="planInfo"
            component={PlanInfoScreen}
            options={{ headerBackVisible: true, headerShown: false }}
          />
          <Stack.Screen
            name="formUpload"
            component={FormUpload}
            options={{ headerBackVisible: true, headerShown: false }}
          />
          {/* <Stack.Screen
            name="support"
            component={SupportScreen}
            options={{ headerBackVisible: true, headerShown: true }}
          /> */}
          <Stack.Screen
            name="support"
            component={SupportScreen}
            options={{ headerBackVisible: true, headerShown: true }}
          />
          <Stack.Screen
            name="requestCallback"
            component={RequestCallbackScreen}
            options={{ headerBackVisible: true, headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
