import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DocumentProps } from "../../interfaces/DocumentProps";

interface SelectButtonProps {
  data: DocumentProps[];
  onSelect: (value: string) => void;
  optionSelected: string;
}

const SelectButtons = ({
  data,
  onSelect,
  optionSelected,
}: SelectButtonProps) => {
  const [selectedOption, setSelectedOption] = React.useState(optionSelected);

  const handleSelect = (value: string) => {
    onSelect(value);
    setSelectedOption(value);
  };
  return (
    <View>
      {data.map((item) => (
        <Pressable
          key={item.name}
          style={[
            styles.button,
            item.name === selectedOption ? styles.selected : styles.unselected,
          ]}
          onPress={() => handleSelect(item.name)}
        >
          <View style={{}}>{item.icon}</View>
          <Text
            style={[
              styles.option,
              item.name === selectedOption && styles.optionSelected,
            ]}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SelectButtons;

const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: "white",
  },
  optionSelected: {
    color: "#2F80ED",
  },
  button: {
    padding: 16,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1.5,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  unselected: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  selected: {
    borderColor: "#2F80ED",
    color: "#2F80ED",
  },
});
