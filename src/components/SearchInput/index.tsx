import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

interface SearchInputProps {
  searchValue: string;
  setSearchValue: (text: string) => void;
}

const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
  return (
    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
      <TextInput
        style={styles.searchField}
        onChangeText={(searchText) => setSearchValue(searchText)}
        defaultValue={searchValue}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchField: {
    fontSize: 20,
    color: "black",
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchSection: {
    marginTop: 12,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  searchIcon: {
    padding: 10,
  },
});
