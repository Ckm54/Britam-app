import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { ImagePreview, PickImageBtn } from "../components/ImageUpload";
import { appStyles } from "../styles/mainStyles";
import { CheckPointsType } from "../interfaces/CheckPoints";
import CheckPoints from "../components/CheckPoints";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

const { height } = Dimensions.get("window");

const PotraitUpload = () => {
  const [potraitImage, setPotraitImage] = React.useState<string | null>(null);
  const [isPotraitImgLoading, setIsPotraitImageUploading] =
    React.useState(false);
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
  return (
    <View style={[appStyles.container, { marginTop: 24 }]}>
      <ScrollView>
        <View style={styles.content}>
          {!potraitImage ? (
            <>
              <PickImageBtn
                loading={isPotraitImgLoading}
                handlePickImage={() =>
                  pickImage(setPotraitImage, setIsPotraitImageUploading)
                }
                btnText="Upload potrait photo"
                iconName="camera"
              />
            </>
          ) : (
            <>
              {potraitImage && (
                <ImagePreview
                  handleDeleteImage={() => setPotraitImage(null)}
                  imageUrl={potraitImage}
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

        <View style={{ marginTop: height / 4 }}>
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
            onPress={() => navigation.navigate("verificationComplete" as never)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PotraitUpload;

const styles = StyleSheet.create({
  content: {
    width: "100%",
  },
});

const checkPoints: CheckPointsType[] = [
  {
    id: 1,
    isChecked: true,
    title: "Take a selfie of yourself wiith a neutral expression",
  },
  {
    id: 2,
    isChecked: true,
    title:
      "Make sure your whole face is visible, centred and your eyes are open",
  },
  {
    id: 3,
    isChecked: false,
    title: "Do not crop your ID or screenshots of your ID",
  },
  {
    id: 4,
    isChecked: false,
    title:
      "Do not hide or alter parts of your face (No hats / beauty images / filters / headgear)",
  },
];
