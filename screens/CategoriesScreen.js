import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The CategoriesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen : {
    flex: 1
  }
});

export default CategoriesScreen;