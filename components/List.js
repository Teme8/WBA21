import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useLoadMedia } from "../hooks/ApiHooks";
import ListItem from "./ListItem";

const List = () => {

  const mediaArray = useLoadMedia();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/cats.jpg")}
          style={styles.bgimage}
          imageStyle={{ borderRadius: 0 }}
        ></ImageBackground>
        <Text style={styles.hello}>Cool cats!</Text>
      </View>
      <View style={styles.flat}>
        <FlatList
          data={mediaArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ListItem singleMedia={item} />}
        />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "green",
    height: "100%",
    paddingTop: 0,
  },
  bgimage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    flex: 1,
    height: 270,
    backgroundColor: "green",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  hello: {
    position: "absolute",
    top: 20,
    left: 40,
    color: "blue",
  },
  flat: {
    flex: 1.5,
  },
});
