import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { products } from "./src/api";

export default function App() {
  return (
    <View style={styles.container}>
      {products &&
        products?.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item?.name}</Text>
              <Text>{item?.price}</Text>
              <Text>{item?.price}</Text>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("@expo/snack-static/react-native-logo.png")}
              />
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
