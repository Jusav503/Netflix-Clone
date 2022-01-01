import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string,
    title: string,
    movies: {id: string, poster: string}[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("MovieDetailsScreen")}>
            <Image style={styles.poster} source={{ uri: item.poster }} />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
