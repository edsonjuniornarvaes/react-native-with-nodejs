import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { products } from "./src/api";

export default function App() {
  return (
    <View style={styles.container}>
      {products &&
        products?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderTopColor: "#000",
                borderBottomColor: "#000",
              }}
            >
              <Text>{item?.name}</Text>
              <Text>{item?.price}</Text>
              <Image
                source={{ uri: item?.image && item?.image }}
                style={{ width: 50, height: 50 }}
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
  },
});