import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import HomeCategory from "../../components/HomeCategory";

import { View } from "../../components/Themed";
import categories from "../../data/categories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "black",
  },
});
