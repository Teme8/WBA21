import React from "react";
import { FlatList, StyleSheet, Text, View, ImageBackground, StatusBar} from "react-native";
import ListItem from "./ListItem";

const mediaArray = [
  {
    key: "0",
    title: "Miu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    thumbnails: {
      w160: "http://placekitten.com/160/161",
    },
    filename: "http://placekitten.com/2048/1920",
  },
  {
    key: "1",
    title: "Mau",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
    thumbnails: {
      w160: "http://placekitten.com/160/164",
    },
    filename: "http://placekitten.com/2041/1922",
  },
  {
    key: "2",
    title: "Miau",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
    thumbnails: {
      w160: "http://placekitten.com/160/167",
    },
    filename: "http://placekitten.com/2039/1920",
  },
];

const List = () => {
  return (
    <View style={styles.container} >
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <View style={styles.header} >
    <ImageBackground
      source={require('../assets/cats.jpg')}
      style={styles.bgimage}
      imageStyle={{borderRadius: 0}}
      ></ImageBackground>
      <Text style={styles.hello}>Cool cats!</Text>
      </View>
      <View style={styles.flat}>
    <FlatList
      data={mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item}/>}
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
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 1,
    height: 270,
    backgroundColor: "green",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  hello: {
    position: 'absolute',
    top: 20,
    left: 40,
    color: 'blue',
  },
  flat: {
    flex: 1.5,
  },
});
