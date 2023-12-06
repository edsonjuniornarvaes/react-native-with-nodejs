import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { products } from "./src/api";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Produtos</Text>
      {products &&
        products?.map((item, index) => {
          return (
            <View key={index} style={styles.box}>
              <Text>{item?.name}</Text>
              <Text>{item?.price}</Text>
              <Image
                source={{ uri: item?.image && item?.image }}
                style={styles.image}
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
    padding: 20,
    marginTop: 12,
  },
  box: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#000",
    borderBottomColor: "#000",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 24,
  },
});
