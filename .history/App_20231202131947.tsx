import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { products } from "./src/api";

export default function App() {
  console.log(products);
  return (
    <View style={styles.container}>
      {products?.map((item) => {
        <Text>{item?.name}</Text>;
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
