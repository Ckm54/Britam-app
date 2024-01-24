import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PickImageBtn } from "../components/ImageUpload";
import { appStyles } from "../styles/mainStyles";

const { height } = Dimensions.get("window");

const FormUpload = () => {
  const [docUpload, setDocUpload] = React.useState<string | null>(null);
  const [isPotraitImgLoading, setIsPotraitImageUploading] =
    React.useState(false);
  const navigation = useNavigation();

  const [fileResponse, setFileResponse] = React.useState([]);

  const handleDocumentSelection = React.useCallback(async () => {
    // try {
    //   const response = await DocumentPicker.pick({
    //     presentationStyle: 'fullScreen',
    //   });
    //   setFileResponse(response);
    // } catch (err) {
    //   console.warn(err);
    // }
  }, []);

  return (
    <SafeAreaView style={[appStyles.container, { marginTop: 24 }]}>
      <View style={styles.content}>
        <Text className="text-lg mb-4">Upload Form</Text>
        <Text className="mb-4">Kindly upload the application form below.</Text>
        {!docUpload ? (
          <>
            <PickImageBtn
              iconName="upload"
              loading={isPotraitImgLoading}
              handlePickImage={handleDocumentSelection}
              btnText="Upload potrait photo"
            />
          </>
        ) : (
          <>
            {docUpload && (
              <View>
                <Text>Document uploaded successfuly</Text>
              </View>
            )}
          </>
        )}
      </View>

      <View>
        <TouchableOpacity
          // disabled={!docUpload}
          style={[
            appStyles.actionBtn,
            {
              marginTop: 20,
              // opacity: !docUpload ? 0.5 : 1
            },
          ]}
          onPress={() => navigation.navigate("allPlans" as never)}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FormUpload;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: height / 2,
    justifyContent: "center",
  },
});
