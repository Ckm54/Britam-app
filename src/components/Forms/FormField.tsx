import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

interface FormFieldProps {
  label: string;
  formKey: string;
  secureTextEntry?: boolean;
  placeholder: string;
  multiline?: boolean;
  handleValueChange: (key: string, value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const FormField = ({
  label,
  formKey,
  placeholder,
  multiline,
  handleValueChange,
  keyboardType,
  secureTextEntry,
}: FormFieldProps) => {
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.formInputField]}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={4}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  labelText: {
    fontSize: 14,
    marginBottom: 4,
    paddingTop: 12,
  },
  formInputField: {
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    color: "black",
  },
});
