import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen3 from '../screens/Screen3';
import {IMAGES} from '../utils/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TempComponent = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop: insets.top}}>
      <Text>COMPONENT</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Screen name="Home" component={Screen3} />
      <Tab.Screen name="Leagues" component={TempComponent} />
      <Tab.Screen name="Research" component={TempComponent} />
      <Tab.Screen name="Leaderboard" component={TempComponent} />
      <Tab.Screen name="Profile" component={TempComponent} />
    </Tab.Navigator>
  );
};

const CustomBottomTab = ({state, navigation}: any) => {
  const bottomTabItems = [
    {
      name: 'Home',
      route: 'Home',
      icon: IMAGES.home,
    },
    {
      name: 'Leagues',
      route: 'Leagues',
      icon: IMAGES.trophies,
    },
    {
      name: 'Research',
      route: 'Research',
      icon: IMAGES.research,
    },
    {
      name: 'Leaderboard',
      route: 'Leaderboard',
      icon: IMAGES.graphs,
    },
    {
      name: 'Profile',
      route: 'Profile',
      icon: IMAGES.user,
    },
  ];

  return (
    <View style={styles.bottomTab}>
      {bottomTabItems.map((item, index) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              navigation.navigate(item.route);
            }}>
            <Image
              source={item.icon}
              style={
                isFocused ? {tintColor: '#6231AD'} : {tintColor: '#B5C0C8'}
              }
            />
            <Text
              style={[
                styles.bottomText,
                isFocused ? {color: '#6231AD'} : {color: '#727682'},
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTab: {
    paddingTop: 10,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomText: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 3,
  },
  icon: {
    alignItems: 'center',
    width: 70,
  },
});
