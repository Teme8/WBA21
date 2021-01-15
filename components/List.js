import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import ListItem from "./ListItem";

const baseUrl = "http://media.mw.metropolia.fi/wbma/";

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit = 5) => {
    try {
      const response = await fetch(baseUrl + "media?limit=" + limit);
      const json = await response.json();
      console.log(json);

      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(baseUrl + "media/" + item.file_id);
          const json = await response.json();
          console.log("media file data", json);
          return json;
        })
      );
      console.log("media array data", media);

      setMediaArray(media);
    } catch (error) {
      console.error("loadMedia error", error);
    }
  };

  useEffect(() => {
    loadMedia(15);
  }, []);

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
