import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../../styles/mainStyles";

interface ImagePreviewProps {
  imageUrl: string;
  handleDeleteImage: () => void;
}

const ImagePreview = ({ imageUrl, handleDeleteImage }: ImagePreviewProps) => {
  return (
    <View style={styles.imagePreview}>
      <View style={appStyles.imgContainer}>
        <Image source={{ uri: imageUrl }} className="w-full h-full" />
      </View>
      <TouchableOpacity style={styles.deleteBtn}>
        <Button title="Delete" color={"red"} onPress={handleDeleteImage} />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  imagePreview: {
    alignItems: "flex-end",
  },

  deleteBtn: {
    position: "absolute",
    bottom: 6,
    right: 16,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    borderColor: "red",
    backgroundColor: "#FFCCBB",
    marginTop: 4,
  },
});
