import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MeadlDetailsScreen from '../screens/MealDetails';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealScreen
  },
  MealDetail: MeadlDetailsScreen
});

export default createAppContainer(MealsNavigator);
