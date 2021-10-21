import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import styles from "./styles";
import movie from "../../data/movie";
import EpisodeItem from "../../components/EpisodeItem";

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];
const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={firstSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={
          <View>
            <Image
              style={styles.poster}
              source={{ uri: firstEpisode.poster }}
            />
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
            </View>
            <View style={styles.headerDetails}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.headerTitle}>{movie.year}</Text>
              <Text style={styles.age}>12+</Text>
              <Text style={styles.headerTitle}>
                {movie.numberOfSeasons} seasons
              </Text>
              <Text style={styles.highDefinition}>HD</Text>
            </View>

            <Pressable style={styles.playButton}>
              <FontAwesome5 name="play" size={15} color="black" />
              <Text style={styles.playTextButton}>Play</Text>
            </Pressable>
            <Pressable style={styles.downloadButton}>
              <Feather name="download" size={20} color="white" />
              <Text style={styles.downoaldTextButton}>Download</Text>
            </Pressable>

            <Text
              style={{ color: "white", marginVertical: 10, paddingTop: 15 }}
            >
              {movie.plot}
            </Text>
            <Text style={{ color: "grey" }}>{movie.cast}</Text>
            <Text style={{ color: "grey" }}>{movie.creator}</Text>

            <View style={{ flexDirection: "row", padding: 10 }}>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Feather name="plus" size={24} color="white" />
                <Text style={{ color: "grey" }}>My List</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignItems: "center", marginHorizontal: 40 }}
              >
                <SimpleLineIcons name="like" size={24} color="white" />
                <Text style={{ color: "grey" }}>Rate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Ionicons
                  name="ios-paper-plane-outline"
                  size={24}
                  color="white"
                />
                <Text style={{ color: "grey" }}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
