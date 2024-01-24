import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-elements";
import CheckPoints from "../components/CheckPoints";
import { ImagePreview, PickImageBtn } from "../components/ImageUpload";
import { CheckPointsType } from "../interfaces/CheckPoints";
import { appStyles } from "../styles/mainStyles";

const DocumentUpload = () => {
  const [frontImage, setFrontImage] = React.useState<string | null>(null);
  const [backImage, setBackImage] = React.useState<string | null>(null);
  const [isFrontImgLoading, setIsFrontImgLoading] = React.useState(false);
  const [isBackImgLoading, setIsBackImgLoading] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const pickImage = async (
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // setInterval(() => {
      setLoading(false);
      // }, 2000);
    } else {
      // setInterval(() => {
      setImage(null);
      setLoading(false);
      // }, 2000);
    }
  };

  const deleteImage = (
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setImage(null);
  };

  return (
    <SafeAreaView style={appStyles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          paddingTop: 24,
          paddingBottom: 16,
        }}
      >
        Upload identification card image
      </Text>
      <ScrollView>
        <View style={styles.content}>
          {!frontImage ? (
            <>
              <PickImageBtn
                loading={isFrontImgLoading}
                handlePickImage={() =>
                  pickImage(setFrontImage, setIsFrontImgLoading)
                }
                btnText="Upload front photo"
                iconName="camera"
              />
            </>
          ) : (
            <>
              {frontImage && (
                <ImagePreview
                  handleDeleteImage={() => deleteImage(setFrontImage)}
                  imageUrl={frontImage}
                />
              )}
            </>
          )}
        </View>

        <View style={[styles.content, { marginTop: 24 }]}>
          {!backImage ? (
            <>
              <PickImageBtn
                loading={isBackImgLoading}
                handlePickImage={() =>
                  pickImage(setBackImage, setIsBackImgLoading)
                }
                btnText="Upload back photo"
                iconName="camera"
              />
            </>
          ) : (
            <>
              {backImage && (
                <ImagePreview
                  imageUrl={backImage}
                  handleDeleteImage={() => deleteImage(setBackImage)}
                />
              )}
            </>
          )}
        </View>

        <View style={{ marginTop: 18, gap: 10 }}>
          {checkPoints.map((point) => (
            <CheckPoints key={point.id} data={point} />
          ))}
        </View>

        <View>
          <View style={appStyles.termsContainer}>
            <CheckBox
              checked={isChecked}
              onPress={handleCheckboxChange}
              containerStyle={appStyles.checkboxContainer}
            />
            <Text style={{ flex: 1, flexWrap: "wrap" }}>
              This information is used for identity verification only, and will
              be kept secure by CrypCoin
            </Text>
          </View>

          <TouchableOpacity
            disabled={!isChecked}
            style={[
              appStyles.actionBtn,
              { marginTop: 20, opacity: !isChecked ? 0.5 : 1 },
            ]}
            onPress={() => navigation.navigate("potraitUpload" as never)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentUpload;

const styles = StyleSheet.create({
  content: {
    width: "100%",
  },
});

const checkPoints: CheckPointsType[] = [
  {
    id: 1,
    isChecked: true,
    title: "Government-issued",
  },
  {
    id: 2,
    isChecked: true,
    title: "Original full-size, unedited document",
  },
  {
    id: 3,
    isChecked: true,
    title: "Place documents against a single-colored background",
  },
  {
    id: 4,
    isChecked: true,
    title: "Readable, well-lit, colored images",
  },
  {
    id: 5,
    isChecked: false,
    title: "No black and white images",
  },
  {
    id: 6,
    isChecked: false,
    title: "No edited or expired documents",
  },
];
