import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { products } from "./src/api";

export default function App() {
  return (
    <View style={styles.container}>
      {products &&
        products?.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item?.name}</Text>
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
