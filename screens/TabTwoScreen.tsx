import { Auth } from "aws-amplify";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const onLogOut = () => {
    Auth.signOut();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogOut} style={styles.logOutButton}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logOutButton:{
    backgroundColor:"grey",
    padding:10,
    borderRadius:10,
  }
});
