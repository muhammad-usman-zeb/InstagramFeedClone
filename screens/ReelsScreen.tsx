import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const ReelsScrean: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Reels Screen</Text>
    </SafeAreaView>
  );
};

export default ReelsScrean;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
