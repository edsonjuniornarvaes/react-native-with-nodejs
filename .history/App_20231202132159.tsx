import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { products } from "./src/api";

type ItemProps = [
  {
    name: string;
    price: string;
    image: string;
  }
];

export default function App() {
  const data: ItemProps = products;

  console.log(products);
  return (
    <View style={styles.container}>
      {data &&
        data?.map((item, index) => {
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
