import { DataStore } from "aws-amplify";
import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import HomeCategory from "../../components/HomeCategory";
import { View } from "../../components/Themed";
import { Category } from "../../src/models";

export default function HomeScreen() {
  
  const [categories, setCategories] = React.useState<Category[]>([])

  React.useEffect(() => {
    const fetchCategories = async () =>{
      setCategories(await DataStore.query(Category));
    } 
    fetchCategories();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
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
