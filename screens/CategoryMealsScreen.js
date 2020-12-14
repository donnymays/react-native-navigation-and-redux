import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The CategoryMealScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen : {
    flex: 1
  }
});

export default CategoryMealScreen;