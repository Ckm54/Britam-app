import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const pages = [
  {
    id: "1",
    image: require("../../assets/icon.png"),
    title: "Welcome To\nMyBritam App",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adiscping elit.",
  },
  {
    id: "2",
    image: require("../../assets/icon.png"),
    title: "Achieve Your\nGoals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adiscping elit.",
  },
  {
    id: "3",
    image: require("../../assets/icon.png"),
    title: "Increase Your\nValue",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adiscping elit.",
  },
];

const Slide = ({ item }: any) => (
  <View style={{ alignItems: "flex-start" }}>
    <Image
      source={item.image}
      style={{ height: "75%", width, resizeMode: "contain" }}
    />
    <View style={{ paddingLeft: 24 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  </View>
);

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const ref = React.useRef(null);

  const updateCurrentSlideIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentSlideIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentSlideIndex);
  };

  const goToNextSlide = () => {
    const nextslideIndex = currentIndex + 1;
    if (nextslideIndex != pages.length) {
      const nextSlideOffset = nextslideIndex * width;
      ref?.current?.scrollToOffset({ offset: nextSlideOffset });
      setCurrentIndex(nextslideIndex);
    }
  };

  const skip = () => {
    // get last slide index
    const lastIndex = pages.length - 1;
    const lastSlideOffest = lastIndex * width;
    ref?.current?.scrollToOffset({ offset: lastSlideOffest });
    setCurrentIndex(lastIndex);
  };

  const Footer = () => (
    <View
      style={{
        height: height * 0.15,
        justifyContent: "space-between",
        paddingHorizontal: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        {pages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && {
                backgroundColor: "#2F80ED",
                width: 25,
              },
            ]}
          />
        ))}
      </View>

      <View style={{ marginBottom: 20 }}>
        {/* get started button */}
        {currentIndex === pages.length - 1 ? (
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={[styles.startBtn]}
              onPress={() => navigation.navigate("login" as never)}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={skip}
              style={[
                styles.btn,
                {
                  backgroundColor: "transparent",
                  borderColor: "black",
                },
              ]}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
              >
                Skip
              </Text>
            </TouchableOpacity>
            <View style={{ width: 15 }} />
            <TouchableOpacity style={[styles.btn]} onPress={goToNextSlide}>
              {/* <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
              >
                Next
              </Text> */}
              <Image source={require("../../assets/chevron-right.png")} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor="black" />
      <FlatList
        ref={ref}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={pages}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 28,
    marginTop: 20,
    textAlign: "left",
    fontWeight: "500",
  },
  subtitle: {
    color: "black",
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "left",
    lineHeight: 23,
  },
  indicator: {
    height: 3.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#2F80ED",
    justifyContent: "center",
    alignItems: "center",
  },
  startBtn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2F80ED",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
