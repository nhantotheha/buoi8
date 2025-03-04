import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainBottomTab from './MainBottomTab';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTab"
        component={MainBottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;