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
import React from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useNavigation } from "@react-navigation/native";
import { appStyles } from "../styles/mainStyles";

const CELL_COUNT = 4;

const OTPScreen = () => {
  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <Text style={{ fontSize: 16, color: "gray" }}>
          A confirmation code has been sent to your email{" "}
        </Text>
        <Text style={{ fontSize: 18 }}>someone@gmail.com</Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          00:16
        </Text>
        <Text
          style={{
            color: "#0077BE",
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Resend Code
        </Text>

        <TouchableOpacity
          style={appStyles.actionBtn}
          onPress={() => navigation.navigate("verify1")}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Verify</Text>
        </TouchableOpacity>
      </Pressable>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  codeFieldRoot: { paddingVertical: 42 },
  cell: {
    width: 74,
    height: 74,
    lineHeight: 72,
    borderRadius: 10,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#2F80ED",
  },
});
