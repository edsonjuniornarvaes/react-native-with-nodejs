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
              <View style={styles.row}>
                <View style={{ marginRight: 8 }}>
                  <Image
                    source={{ uri: item?.image && item?.image }}
                    style={styles.image}
                  />
                </View>
                <View style={styles.price}>
                  <View style={{ marginBottom: 4 }}>
                    <Text style={styles.description}>{item?.name}</Text>
                  </View>
                  <Text style={styles.description}>{item?.price}</Text>
                </View>
              </View>
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
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderTopColor: "#4D5766",
    borderBottomColor: "#4D5766",
    paddingVertical: 12,
  },
  image: {
    width: 50,
    height: 50,
    // borderRadius: 6,
  },
  title: {
    // fontSize: 24,
    // fontWeight: "bold",
    // color: "#363A40",
    // marginVertical: 24,
  },
  row: {
    // flexDirection: "row",
    // alignItems: "center",
  },
  description: {
    // fontSize: 16,
    // fontWeight: "bold",
    // color: "#363A40",
  },
  price: {
    // flexDirection: "column",
  },
});
