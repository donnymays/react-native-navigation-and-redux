import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MeadlDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The MeadlDetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MeadlDetailsScreen;