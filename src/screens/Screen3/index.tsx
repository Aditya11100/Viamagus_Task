/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IMAGES} from '../../utils/images';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Badges from '../../components/Badges';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Screen3 = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'rgba(98,49,173,0.06)', flex: 1}}>
      <View
        style={{
          paddingTop: insets.top + 10,
          paddingBottom: 30,
          backgroundColor: 'white',
          marginBottom: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Image source={IMAGES.appIcon} />
          <Text style={{fontWeight: '500', color: '#727682'}}>Profile</Text>
          <Image source={IMAGES.message} />
        </View>
        <Image source={IMAGES.profile_pic} style={styles.profile} />
        <Text style={styles.nameStyle}>Jina Simons</Text>
        <Text style={styles.ptsStyle}>6000 Pts</Text>
        <Text style={styles.desc}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <Pressable style={styles.logout} onPress={() => navigation.goBack()}>
          <Image source={IMAGES.logout} />
          <Text style={{color: '#727682', fontWeight: '500'}}>Logout</Text>
        </Pressable>
        <View
          style={{
            marginTop: 35,
          }}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              alignItems: 'center',
              top: -17,
              zIndex: 10,
              height: 10,
            }}>
            <Image source={IMAGES.star} />
          </View>
          <View style={styles.underOver}>
            <View>
              <Text style={{fontWeight: '600', color: '#727682'}}>
                Under or Over
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image source={IMAGES.greenUpArrow} />
                <Text style={styles.number}>81%</Text>
              </View>
            </View>
            <View style={{marginLeft: 80}}>
              <Text style={{fontWeight: '600', color: '#727682'}}>Top 5</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image source={IMAGES.redDownArrow} />
                <Text style={styles.number}>81%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {height: 60},
          tabBarIndicatorStyle: {
            backgroundColor: '#6231AD',
          },
          tabBarActiveTintColor: '#6231AD',
          tabBarLabelStyle: {
            fontWeight: '600',
          },
        }}>
        <Tab.Screen name="Games playes" component={Badges} />
        <Tab.Screen name="Badges" component={Badges} />
      </Tab.Navigator>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  profile: {
    alignSelf: 'center',
    marginTop: 20,
  },
  nameStyle: {
    fontWeight: '500',
    color: '#333333',
    alignSelf: 'center',
    marginTop: 4,
  },
  ptsStyle: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 12,
    color: '#727682',
  },
  desc: {
    fontWeight: '500',
    lineHeight: 20,
    color: '#727682',
    marginTop: 10,
    marginHorizontal: 15,
    flexShrink: 1,
  },
  logout: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  underOver: {
    marginHorizontal: 15,
    borderColor: '#EEEAF3',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  number: {
    fontWeight: '700',
    fontSize: 24,
    color: '#4F4F4F',
    marginLeft: 8,
  },
});
