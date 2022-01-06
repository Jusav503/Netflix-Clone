import { useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Category, Movie } from "../../src/models";

import styles from "./styles";

interface HomeCategoryProps {
  category: Category;
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter(
        (movie) => movie.categoryID == category.id
      );
      setMovies(result);
    };
    fetchMovies();
  }, []);

  const onMoviePress = (movie: Movie) => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onMoviePress(item)}>
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
