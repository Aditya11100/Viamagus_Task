import React from 'react';
import {StyleSheet} from 'react-native';
import Screen1 from './src/screens/Screen1';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Screen3 from './src/screens/Screen3';
import BottomTab from './src/navigations/BottomTab';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: false}}
          initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
