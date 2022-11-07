import React from 'react';
import {View, StyleSheet, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {USERS} from '../data/data';

const Stories: React.FC = () => {
  return (
    <View>
      <FlatList
        style={styles.storiesContainer}
        data={USERS}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <View style={styles.story}>
              <TouchableOpacity>
              <Image style={styles.storyimage} source={item.url} />
              </TouchableOpacity>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={item => {
          return item.name;
        }}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    borderRadius: 60,
    margin: 8,
    alignItems:'center',
  },
  text: {
    color: 'white',
    fontSize:12,
    marginTop:4,
  },
  storiesContainer: {
    flexDirection: 'row',
  },
  storyimage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: '#ff8501',
    borderWidth: 3,
  },
});
