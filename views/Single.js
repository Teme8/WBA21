import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';
import { uploadUrl } from '../utils/variables';
import { Avatar, Card, ListItem, Text } from 'react-native-elements';

const Single = ({route}) => {
  const {file} = route.params;
  const [avatar, setAvatar] = useState('http://placekitten.com/100');
  const {getFilesByTag} = useTag();

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarList = await getFilesByTag('avatar_' + file.user_id);
        if (avatarList.length > 0) {
          setAvatar(uploadsURL + avatarList.pop().filename);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchAvatar();
  }, []);

  return (
    <Card>
      <Card.Title h4>{file.title}</Card.Title>
      <Card.Title>{moment(file.time_added).format('LLL')}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{uri: uploadsURL + file.filename}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Card.Divider />
      <Text style={styles.description}>{file.description}</Text>
      <ListItem>
        <Avatar source={{uri: avatar}} />
        <Text>Ownername</Text>
      </ListItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  description: {
    marginBottom: 10,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
