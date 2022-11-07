import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

interface headerTypes {
  flatListRef: () => void;
}

const Header: React.FC<headerTypes> = ({flatListRef}) => {

  /*
  let feedRef = useRef<FlatList>(null);
  const feedReferenceHandler = (listFeedRef: React.RefObject<FlatList>) =>
  {
    feedRef = listFeedRef;
  };
  */

  const logoPressHandler = () => {
    flatListRef();
    //flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };
  return (
    <View style={styles.outterContainer}>
      <TouchableOpacity onPress={logoPressHandler}>
        <Image
          source={require('../assets/instagram.png')}
          style={styles.fontStyle}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/add-item.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unReadBadgeText}>12</Text>
          </View>
          <Image
            source={require('../assets/messenger.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  outterContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  fontStyle: {
    color: 'white',
    tintColor: 'white',
    width: 130,
    height: 70,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 35,
    width: 35,
    color: 'white',
    tintColor: 'white',
    margin: 4,
  },
  unreadBadge: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 20,
    bottom: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    width: 25,
    height: 18,
  },
  unReadBadgeText: {
    color: 'white',
  },
});
