import React from "react";
import { FlatList, Image, Text } from "react-native";

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

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image style={styles.poster} source={{ uri: item.poster }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
