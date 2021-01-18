import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import { uploadUrl } from "../utils/variables";

const ListItem = ({navigation, singleMedia}) => {
  return (
    <TouchableOpacity
    style={styles.row}
    onPress={() => {
      navigation.navigate('Single', {file: singleMedia});
    }}>
      <View style={styles.imagebox}>
      <Image
        style={styles.image}
        source={{ uri: uploadUrl + singleMedia.thumbnails.w160 }}
      />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'lightgreen',
    borderRadius: 16,
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    alignItems: 'center',
  },
  imagebox: {
    flex: 1,
    height: 120,
  },
  image: {
    flex: 1,
    borderRadius: 80,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
}

export default ListItem;
