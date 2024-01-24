import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  actionBtn: {
    backgroundColor: "#0077BE",
    height: 50,
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  checkpointsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  checkpointText: {
    fontWeight: "400",
    fontSize: 16,
    flex: 1,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 20,
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
  },
  imgContainer: {
    width: "100%",
    height: 133,
    borderRadius: 10,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
