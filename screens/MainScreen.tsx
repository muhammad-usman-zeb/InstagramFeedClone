import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Stories from '../components/Stories';
import {useState} from 'react';

const MainScreen: React.FC = () => {
  const [toTopFlag, setToTopFlag] = useState(false);

  const listRefHandler = (listRef: React.RefObject<FlatList<any>>) => {
    listRef.current?.scrollToOffset({animated: true, offset: 0});
    setToTopFlag(false);
  };

  return (
    <SafeAreaView style={styles.outterContainer}>
      <Header flatListRef={setToTopFlag.bind(this, true)} />
      <Stories />
      <Feed listRef={toTopFlag} refHandler={listRefHandler} />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
